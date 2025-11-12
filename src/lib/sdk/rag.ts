/**
 * RAG Query SDK
 *
 * SDK for querying organization documents using the public RAG API
 */

export interface RAGConfig {
  apiUrl: string
  apiKey: string
}

export interface RAGQueryOptions {
  question: string
  documentId?: string
  minScore?: number
  limit?: number
}

export interface TokenUsage {
  input_tokens: number
  output_tokens: number
  total_tokens: number
}

export interface RAGMetadata {
  type: 'metadata'
  org_id: string
  confidence: number
  sources_used: number
}

export interface RAGContent {
  type: 'content'
  content: string
}

export interface RAGDone {
  type: 'done'
  response: string
  tokens_used?: TokenUsage
}

export interface RAGError {
  type: 'error'
  error: string
  org_id?: string
}

export type RAGStreamEvent = RAGMetadata | RAGContent | RAGDone | RAGError

export interface RAGQueryCallbacks {
  onMetadata?: (metadata: RAGMetadata) => void
  onContent?: (content: string, accumulated: string) => void
  onDone?: (fullResponse: string, tokenUsage?: TokenUsage) => void
  onError?: (error: string) => void
}

export class RAGQuerySDK {
  private config: RAGConfig
  private abortController: AbortController | null = null

  constructor(config: RAGConfig) {
    this.config = config
  }

  /**
   * Query documents with streaming response
   */
  async query(
    options: RAGQueryOptions,
    callbacks?: RAGQueryCallbacks
  ): Promise<{ content: string; tokenUsage?: TokenUsage }> {
    this.abortController = new AbortController()

    const response = await fetch(`${this.config.apiUrl}/api/v1/public/rag/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.config.apiKey,
      },
      body: JSON.stringify({
        question: options.question,
        document_id: options.documentId,
        min_score: options.minScore ?? 0.0,
        limit: options.limit ?? 5,
      }),
      signal: this.abortController.signal,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: response.statusText }))
      throw new Error(`RAG query failed: ${response.status} - ${error.error}`)
    }

    const reader = response.body?.getReader()
    if (!reader) {
      throw new Error('Response body is not readable')
    }

    const decoder = new TextDecoder()
    let buffer = ''
    let accumulatedContent = ''
    let tokenUsage: TokenUsage | undefined

    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6)
            try {
              const parsed: RAGStreamEvent = JSON.parse(data)

              switch (parsed.type) {
                case 'metadata':
                  callbacks?.onMetadata?.(parsed)
                  break

                case 'content':
                  accumulatedContent += parsed.content
                  callbacks?.onContent?.(parsed.content, accumulatedContent)
                  break

                case 'done':
                  if (parsed.tokens_used) {
                    tokenUsage = parsed.tokens_used
                  }
                  callbacks?.onDone?.(parsed.response, tokenUsage)
                  break

                case 'error':
                  callbacks?.onError?.(parsed.error)
                  throw new Error(parsed.error)
              }
            } catch (e) {
              console.warn('Failed to parse SSE line:', line, e)
            }
          }
        }
      }

      return { content: accumulatedContent, tokenUsage }
    } finally {
      reader.releaseLock()
    }
  }

  /**
   * Cancel the current query
   */
  cancel(): void {
    if (this.abortController) {
      this.abortController.abort()
      this.abortController = null
    }
  }
}

/**
 * Create a new RAG Query SDK instance
 */
export function createRAGQuerySDK(config: RAGConfig): RAGQuerySDK {
  return new RAGQuerySDK(config)
}
