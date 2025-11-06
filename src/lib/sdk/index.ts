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

// React Provider and Hooks
export {
  SDKProvider,
  useSDK,
  useSubscribers,
  usePosts,
  useCollection,
} from "./provider"
