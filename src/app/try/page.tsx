'use client';

import Image from "next/image";
import { FormEventHandler, useRef, useState } from "react";
import { AiInput, AiInputRef } from "@/components/AiInput";
import { createRAGQuerySDK, type TokenUsage } from "@/lib/sdk";
import * as marked from 'marked';
import './ai-response.scss';

// Configuration - replace with your values
const RAG_CONFIG = {
    apiUrl: 'http://localhost:8080',
    apiKey: 'gol_2cb752632902fcc32a0aca1c37558ad28fc2336ebf9f6bc835dea664cd66e0b0',
};

export default function Try() {
    const [question, setQuestion] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isStreaming, setIsStreaming] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [metadata, setMetadata] = useState<{
        confidence?: number;
        sources?: number;
        tokens?: TokenUsage;
    }>({});

    const inputRef = useRef<AiInputRef>(null);
    const ragSDK = useRef(createRAGQuerySDK(RAG_CONFIG));

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (!question.trim()) {
            return;
        }

        if (!RAG_CONFIG.apiKey) {
            setError('API key not configured. Please set NEXT_PUBLIC_API_KEY environment variable.');
            return;
        }

        setIsStreaming(true);
        setResponse('');
        setError('');
        setMetadata({});

        try {
            const result = await ragSDK.current.query(
                {
                    question: question.trim(),
                    limit: 5,
                    minScore: 0.0,
                },
                {
                    onMetadata: (meta) => {
                        setMetadata({
                            confidence: meta.confidence,
                            sources: meta.sources_used,
                        });
                    },
                    onContent: (content, accumulated) => {
                        setResponse(accumulated);
                    },
                    onDone: (fullResponse, tokenUsage) => {
                        setResponse(fullResponse);
                        if (tokenUsage) {
                            setMetadata(prev => ({
                                ...prev,
                                tokens: tokenUsage,
                            }));
                        }
                        setIsStreaming(false);
                    },
                    onError: (err) => {
                        setError(err);
                        setIsStreaming(false);
                    },
                }
            );
        } catch (err: any) {
            setError(err.message || 'An error occurred');
            setIsStreaming(false);
        }
    };

    const handleCancelStream = () => {
        ragSDK.current.cancel();
        setIsStreaming(false);
    };

    const handleClear = () => {
        setQuestion('');
        setResponse('');
        setError('');
        setMetadata({});
    };

    return (
        <div>
            <section className="container mx-auto px-4">
                <div className="flex flex-col justify-center items-center py-20">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <Image src={'/ai.gif'} alt={"ai gif"} width={100} height={100} className="mx-auto" />
                        <p className="text-gray-600 dark:text-gray-400">
                            Ask questions about your documents
                        </p>
                    </div>

                    {/* Response Section */}
                    {(response || error || isStreaming) && (
                        <div className="w-full max-w-3xl mt-8">
                            <div className="p-6">
                                {/* Response */}
                                {error ? (
                                    <div className="text-red-600 dark:text-red-400">
                                        <strong>Error:</strong> {error}
                                    </div>
                                ) : (
                                    <div className="prose text-[16px] dark:prose-invert max-w-none">
                                        {response && <div
                                            className='chat-response'
                                            dangerouslySetInnerHTML={{ __html: marked.parse(response) as string }}
                                        />
                                            || (
                                                <div className="text-gray-500 italic">
                                                    Generating response...
                                                </div>
                                            )}
                                    </div>
                                )}

                                {/* Clear Button */}
                                {!isStreaming && (
                                    <div className="mt-4">
                                        <button
                                            onClick={handleClear}
                                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Input Section */}
                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <AiInput
                                ref={inputRef}
                                onSubmit={() => handleSubmit}
                                className={'h-[130px] z-[90] w-full'}
                                placeholder='Ask anything about your documents...'
                                disabled={isStreaming}
                                isStreaming={isStreaming}
                                onCancelStream={handleCancelStream}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
