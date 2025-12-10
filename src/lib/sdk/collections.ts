/**
 * Data Collection SDK
 *
 * A lightweight SDK for interacting with the data collection API.
 * Use this SDK to create custom forms, surveys, and data collection endpoints.
 */

export interface Field {
  name: string
  type: "string" | "number" | "boolean" | "date" | "email"
  required: boolean
  validation?: {
    pattern?: string
    min?: number
    max?: number
    options?: string[]
  }
}

export interface DataSchema {
  id: string
  created_at: string
  updated_at: string
  organization_id: string
  collection_name: string
  fields: Field[]
  public_submissions: boolean
  require_auth: boolean
}

export interface DataEntry extends Record<string, any> {
  id: string
  created_at: string
}

export interface CreateSchemaOptions {
  collectionName: string
  fields: Field[]
  publicSubmissions?: boolean
  requireAuth?: boolean
}

export interface SubmitDataOptions {
  data: Record<string, any>
}

export interface Subscriber {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  status: "active" | "unsubscribed"
  source?: string
  tags?: string[]
  custom_fields?: Record<string, string>
  created_at: string
  updated_at: string
}

export interface AddSubscriberOptions {
  first_name?: string
  last_name?: string
  email: string
  phone?: string
  tags?: string[]
  source?: string
  custom_fields?: Record<string, string>
}

export interface DataCollectionConfig {
  apiUrl: string
  organizationId: string
  apiKey?: string
}

export interface PostMetadata {
  seo_title?: string
  seo_description?: string
  seo_tags?: string[]
}

export interface Post {
  id: string
  created_at: string
  updated_at: string
  organization_id: string
  title: string
  slug: string
  content: string
  parsed?: Record<string, any>
  excerpt: string
  header_image?: string
  metadata?: PostMetadata
  author_id: string
  published: boolean
  published_at?: string
  is_pinned: boolean
  is_featured: boolean
}

export interface CreatePostOptions {
  title: string
  slug: string
  content: Record<string, any>
  excerpt?: string
  header_image?: string
  metadata?: PostMetadata
  published?: boolean
  is_pinned?: boolean
  is_featured?: boolean
}

export interface UpdatePostOptions {
  title?: string
  slug?: string
  content?: Record<string, any>
  excerpt?: string
  header_image?: string
  metadata?: PostMetadata
  published?: boolean
  is_pinned?: boolean
  is_featured?: boolean
}

export interface PostListResponse {
  posts: Post[]
  total: number
  page: number
  limit: number
}

/**
 * Posts/Blog API
 */
class PostsAPI {
  constructor(
    private request: <T>(endpoint: string, options?: RequestInit) => Promise<T>,
    private organizationId: string,
    private useApiRoute: boolean = false
  ) { }

  private getEndpoint(path: string): string {
    const base = this.useApiRoute ? "/api/v1/api" : "/api/v1"
    return `${base}/organizations/${this.organizationId}${path}`
  }

  /**
   * List all published posts (public)
   * @param page - Page number (default: 1)
   * @param limit - Items per page (default: 10)
   * @param isFeatured - Filter by featured status (optional)
   * @param isPinned - Filter by pinned status (optional)
   */
  async list(
    page: number = 1,
    limit: number = 10,
    isFeatured?: boolean,
    isPinned?: boolean
  ): Promise<PostListResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    })

    if (isFeatured !== undefined) {
      params.append('is_featured', isFeatured.toString())
    }
    if (isPinned !== undefined) {
      params.append('is_pinned', isPinned.toString())
    }

    return this.request(
      `/api/v1/organizations/${this.organizationId}/posts?${params.toString()}`
    )
  }

  /**
   * List all posts including drafts (requires authentication)
   * @param page - Page number (default: 1)
   * @param limit - Items per page (default: 10)
   * @param isFeatured - Filter by featured status (optional)
   * @param isPinned - Filter by pinned status (optional)
   */
  async listAll(
    page: number = 1,
    limit: number = 10,
    isFeatured?: boolean,
    isPinned?: boolean
  ): Promise<PostListResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    })

    if (isFeatured !== undefined) {
      params.append('is_featured', isFeatured.toString())
    }
    if (isPinned !== undefined) {
      params.append('is_pinned', isPinned.toString())
    }

    return this.request(
      this.getEndpoint(`/posts/all?${params.toString()}`)
    )
  }

  /**
   * Get a post by ID (public if published)
   */
  async get(postId: string): Promise<Post> {
    return this.request<Post>(
      `/api/v1/organizations/${this.organizationId}/posts/${postId}`
    )
  }

  /**
   * Get a post by slug (public if published)
   */
  async getBySlug(slug: string): Promise<Post> {
    return this.request<Post>(
      `/api/v1/organizations/${this.organizationId}/posts/slug/${slug}`
    )
  }

  /**
   * Get posts by author (public if published)
   */
  async getByAuthor(
    authorId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<PostListResponse> {
    return this.request(
      `/api/v1/organizations/${this.organizationId}/posts/author/${authorId}?page=${page}&limit=${limit}`
    )
  }

  /**
   * Create a new post (requires authentication)
   */
  async create(options: CreatePostOptions): Promise<Post> {
    return this.request<Post>(this.getEndpoint("/posts"), {
      method: "POST",
      body: JSON.stringify(options),
    })
  }

  /**
   * Update a post (requires authentication)
   */
  async update(postId: string, options: UpdatePostOptions): Promise<Post> {
    return this.request<Post>(this.getEndpoint(`/posts/${postId}`), {
      method: "PUT",
      body: JSON.stringify(options),
    })
  }

  /**
   * Delete a post (requires authentication)
   */
  async delete(postId: string): Promise<void> {
    return this.request<void>(this.getEndpoint(`/posts/${postId}`), {
      method: "DELETE",
    })
  }

  /**
   * Publish a post (requires authentication)
   */
  async publish(postId: string): Promise<Post> {
    return this.request<Post>(this.getEndpoint(`/posts/${postId}/publish`), {
      method: "POST",
    })
  }

  /**
   * Unpublish a post (requires authentication)
   */
  async unpublish(postId: string): Promise<Post> {
    return this.request<Post>(this.getEndpoint(`/posts/${postId}/unpublish`), {
      method: "POST",
    })
  }
}

/**
 * Subscribers API
 */
class SubscribersAPI {
  constructor(
    private request: <T>(endpoint: string, options?: RequestInit) => Promise<T>,
    private organizationId: string,
    private useApiRoute: boolean = false
  ) { }

  private getEndpoint(path: string): string {
    const base = this.useApiRoute ? "/api/v1/api" : "/api/v1"
    return `${base}/organizations/${this.organizationId}${path}`
  }

  /**
   * Add a new subscriber
   */
  async add(options: AddSubscriberOptions): Promise<Subscriber> {
    return this.request<Subscriber>(this.getEndpoint("/subscribers"), {
      method: "POST",
      body: JSON.stringify(options),
    })
  }

  /**
   * List all subscribers
   */
  async list(
    page: number = 1,
    limit: number = 10
  ): Promise<{ subscribers: Subscriber[]; total: number; page: number; limit: number }> {
    return this.request(
      this.getEndpoint(`/subscribers?page=${page}&limit=${limit}`)
    )
  }

  /**
   * Get a subscriber by ID
   */
  async get(subscriberId: string): Promise<Subscriber> {
    return this.request<Subscriber>(this.getEndpoint(`/subscribers/${subscriberId}`))
  }

  /**
   * Get a subscriber by email
   */
  async getByEmail(email: string): Promise<Subscriber> {
    return this.request<Subscriber>(
      `/api/v1/organizations/${this.organizationId}/subscribers/search?email=${encodeURIComponent(email)}`
    )
  }

  /**
   * Update a subscriber
   */
  async update(
    subscriberId: string,
    options: Partial<AddSubscriberOptions>
  ): Promise<Subscriber> {
    return this.request<Subscriber>(
      this.getEndpoint(`/subscribers/${subscriberId}`),
      {
        method: "PUT",
        body: JSON.stringify(options),
      }
    )
  }

  /**
   * Delete a subscriber
   */
  async delete(subscriberId: string): Promise<void> {
    return this.request<void>(this.getEndpoint(`/subscribers/${subscriberId}`), {
      method: "DELETE",
    })
  }

  /**
   * Unsubscribe a subscriber (sets status to unsubscribed)
   */
  async unsubscribe(email: string): Promise<void> {
    return this.request<void>(this.getEndpoint("/subscribers/unsubscribe"), {
      method: "POST",
      body: JSON.stringify({ email }),
    })
  }
}

/**
 * Collection API for a specific collection
 */
class CollectionAPI {
  constructor(
    private collectionName: string,
    private request: <T>(endpoint: string, options?: RequestInit) => Promise<T>,
    private organizationId: string,
    private useApiRoute: boolean = false
  ) { }

  private getEndpoint(path: string): string {
    const base = this.useApiRoute ? "/api/v1/api" : "/api/v1"
    return `${base}/organizations/${this.organizationId}/data/${this.collectionName}${path}`
  }

  /**
   * Add data to the collection
   */
  async add(data: Record<string, any>): Promise<DataEntry> {
    return this.request<DataEntry>(
      this.getEndpoint(""),
      {
        method: "POST",
        body: JSON.stringify({ data }),
      }
    )
  }

  /**
   * List all entries in the collection
   */
  async list(
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: Record<string, any>[]; total: number; page: number; limit: number }> {
    return this.request(
      this.getEndpoint(`/entries?page=${page}&limit=${limit}`)
    )
  }

  /**
   * Get a single entry by ID
   */
  async get(entryId: string): Promise<DataEntry> {
    return this.request<DataEntry>(
      this.getEndpoint(`/entries/${entryId}`)
    )
  }

  /**
   * Get the schema for this collection
   */
  async schema(): Promise<DataSchema> {
    return this.request<DataSchema>(
      `/api/v1/organizations/${this.organizationId}/data/${this.collectionName}/schema`
    )
  }
}

import { SchedulingAPI } from "./scheduling"

/**
 * Data Collection SDK Client
 */
export class DataCollectionSDK {
  private apiUrl: string
  public readonly organizationId: string
  private apiKey?: string
  public subscribers: SubscribersAPI
  public posts: PostsAPI
  public scheduling: SchedulingAPI

  constructor(config: DataCollectionConfig) {
    this.apiUrl = config.apiUrl.replace(/\/$/, "") // Remove trailing slash
    this.organizationId = config.organizationId
    this.apiKey = config.apiKey

    this.subscribers = new SubscribersAPI(
      this.request.bind(this),
      this.organizationId,
      !!this.apiKey // Use API route if API key is provided
    )

    this.posts = new PostsAPI(
      this.request.bind(this),
      this.organizationId,
      !!this.apiKey // Use API route if API key is provided
    )

    this.scheduling = new SchedulingAPI(
      this.request.bind(this),
      !!this.apiKey
    )
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    if (this.apiKey) {
      headers["X-API-Key"] = this.apiKey
    }

    return headers
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.apiUrl}${endpoint}`
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options?.headers,
      },
    })

    console.log(this.getHeaders());


    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: "Request failed" }))
      throw new Error(error.error || `HTTP ${response.status}`)
    }

    return response.json()
  }

  /**
   * Access a specific collection
   */
  collection(name: string): CollectionAPI {
    return new CollectionAPI(name, this.request.bind(this), this.organizationId, !!this.apiKey)
  }

  /**
   * Get schema for a collection
   * @deprecated Use gool.collection(name).schema() instead
   */
  async getSchema(collectionName: string): Promise<DataSchema> {
    return this.collection(collectionName).schema()
  }

  /**
   * Submit data to a collection
   * @deprecated Use gool.collection(name).add(data) instead
   */
  async submitData(
    collectionName: string,
    options: SubmitDataOptions
  ): Promise<DataEntry> {
    return this.collection(collectionName).add(options.data)
  }

  /**
   * List all entries for a collection (requires API key with data:read scope)
   * @deprecated Use gool.collection(name).list() instead
   */
  async listEntries(
    collectionName: string,
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: Record<string, any>[]; total: number; page: number; limit: number }> {
    return this.collection(collectionName).list(page, limit)
  }

  /**
   * Get a single entry by ID (requires API key with data:read scope)
   * @deprecated Use gool.collection(name).get(entryId) instead
   */
  async getEntry(collectionName: string, entryId: string): Promise<DataEntry> {
    return this.collection(collectionName).get(entryId)
  }
}

/**
 * Create a new Data Collection SDK instance
 */
export function createDataCollectionSDK(config: DataCollectionConfig): DataCollectionSDK {
  return new DataCollectionSDK(config)
}

// Example usage:
// const gool = new DataCollectionSDK({
//   apiUrl: "https://api.yourapp.com",
//   organizationId: "your-org-id",
//   apiKey: "gol_your_api_key"
// })
//
// // Add a subscriber
// await gool.subscribers.add({ email: "user@example.com" })
//
// // Add data to a collection
// await gool.collection("contact_form").add({
//   name: "John Doe",
//   email: "john@example.com",
//   message: "Hello!"
// })
//
// // Get collection schema
// const schema = await gool.collection("contact_form").schema()
//
// // List entries
// const entries = await gool.collection("contact_form").list(1, 10)
