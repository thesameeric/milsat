/**
 * Data Collection SDK
 *
 * Export all SDK functionality from a single entry point
 */

// Core SDK
export {
  DataCollectionSDK,
  createDataCollectionSDK,
  type DataCollectionConfig,
  type Subscriber,
  type AddSubscriberOptions,
  type Post,
  type CreatePostOptions,
  type UpdatePostOptions,
  type PostListResponse,
  type DataSchema,
  type DataEntry,
  type Field,
  type CreateSchemaOptions,
  type SubmitDataOptions,
} from "./collections"

// RAG Query SDK
export {
  RAGQuerySDK,
  createRAGQuerySDK,
  type RAGConfig,
  type RAGQueryOptions,
  type TokenUsage,
  type RAGMetadata,
  type RAGContent,
  type RAGDone,
  type RAGError,
  type RAGStreamEvent,
  type RAGQueryCallbacks,
} from "./rag"

// React Provider and Hooks
export {
  SDKProvider,
  useSDK,
  useSubscribers,
  usePosts,
  useCollection,
} from "./provider"
