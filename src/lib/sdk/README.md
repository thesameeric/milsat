# Data Collection SDK

A lightweight TypeScript SDK for interacting with the Goool data collection and subscriber management API.

## Features

- ✅ **Subscriber Management** - Add, list, update, and delete subscribers
- ✅ **Data Collections** - Submit and retrieve data from custom collections
- ✅ **Type-safe** - Full TypeScript support
- ✅ **React Hooks** - Built-in React hooks and provider
- ✅ **API Key Support** - Works with both authenticated and public endpoints

## Installation

The SDK is already included in this project. Just import it:

```typescript
import { DataCollectionSDK } from "@/lib/sdk/collections"
import { SDKProvider, useSubscribers, useCollection } from "@/lib/sdk/provider"
```

## Quick Start

### 1. Configure the SDK

```typescript
import { DataCollectionSDK } from "@/lib/sdk/collections"

const sdk = new DataCollectionSDK({
  apiUrl: "https://api.doormart.co",
  organizationId: "your-org-id",
  apiKey: "sk_live_your_api_key", // Optional: for authenticated endpoints
})
```

### 2. Use in React with Provider

```tsx
import { SDKProvider } from "@/lib/sdk/provider"

function App() {
  return (
    <SDKProvider
      config={{
        apiUrl: process.env.NEXT_PUBLIC_API_URL,
        organizationId: process.env.NEXT_PUBLIC_ORG_ID,
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
      }}
    >
      <YourApp />
    </SDKProvider>
  )
}
```

## Subscriber Management

### Add a Subscriber

```typescript
// Using SDK directly
await sdk.subscribers.add({
  first_name: "John",
  last_name: "Doe",
  email: "john@example.com",
  phone: "+1234567890",
  tags: ["newsletter", "customer"],
  source: "website",
})

// Using React hook
import { useSubscribers } from "@/lib/sdk/provider"

function SubscribeButton() {
  const subscribers = useSubscribers()

  const handleSubscribe = async () => {
    await subscribers.add({
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      tags: ["newsletter"],
    })
  }
}
```

### List Subscribers

```typescript
// Get paginated list
const result = await sdk.subscribers.list(1, 20)
console.log(result.subscribers) // Array of subscribers
console.log(result.total) // Total count
```

### Get Subscriber by Email

```typescript
const subscriber = await sdk.subscribers.getByEmail("john@example.com")
```

### Update Subscriber

```typescript
await sdk.subscribers.update("subscriber-id", {
  tags: ["newsletter", "vip"],
  phone: "+9876543210",
})
```

### Delete Subscriber

```typescript
await sdk.subscribers.delete("subscriber-id")
```

### Unsubscribe

```typescript
await sdk.subscribers.unsubscribe("john@example.com")
```

## Data Collections

### Submit Data to a Collection

```typescript
// Using SDK directly
await sdk.collection("contact_form").add({
  name: "John Doe",
  email: "john@example.com",
  message: "Hello!",
})

// Using React hook
import { useCollection } from "@/lib/sdk/provider"

function ContactForm() {
  const collection = useCollection("contact_form")

  const handleSubmit = async (data) => {
    await collection.add(data)
  }
}
```

### Get Collection Schema

```typescript
const schema = await sdk.collection("contact_form").schema()
console.log(schema.fields) // Array of field definitions
```

### List Collection Entries

```typescript
const result = await sdk.collection("contact_form").list(1, 10)
console.log(result.entries) // Array of data entries
```

### Get Single Entry

```typescript
const entry = await sdk.collection("contact_form").get("entry-id")
```

## React Components

### Pre-built Subscribe Form

```tsx
import { SubscribeForm } from "@/components/subscribe-form"

// Default card variant
<SubscribeForm
  title="Join Our Newsletter"
  description="Get weekly updates"
  tags={["newsletter"]}
  source="homepage"
/>

// Inline variant
<SubscribeForm
  variant="inline"
  title="Stay Updated"
  tags={["updates"]}
/>

// Minimal variant (email only)
<SubscribeForm
  variant="minimal"
  tags={["footer"]}
/>
```

### Custom Component with Hooks

```tsx
import { useSubscribers } from "@/lib/sdk/provider"
import { useState } from "react"

function CustomSubscribeForm() {
  const subscribers = useSubscribers()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await subscribers.add({
        first_name: "Subscriber",
        last_name: "",
        email,
        source: "custom-form",
      })
      alert("Subscribed!")
      setEmail("")
    } catch (error) {
      alert("Failed: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button disabled={loading}>
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  )
}
```

## API Key vs Public Access

### With API Key (Authenticated)
When you provide an `apiKey`, the SDK uses the authenticated API routes:
- `POST /api/v1/api/organizations/:orgId/subscribers`
- Requires `subscribers:write` scope
- Higher rate limits

### Without API Key (Public)
When no `apiKey` is provided, uses public routes:
- `POST /api/v1/organizations/:orgId/subscribers`
- Public access
- Standard rate limits

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.doormart.co
NEXT_PUBLIC_ORG_ID=your-organization-id
NEXT_PUBLIC_API_KEY=sk_live_your_api_key  # Optional
```

## Error Handling

```typescript
try {
  await sdk.subscribers.add({ email: "invalid" })
} catch (error) {
  console.error(error.message) // User-friendly error message
}
```

## TypeScript Types

```typescript
interface Subscriber {
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

interface AddSubscriberOptions {
  first_name: string
  last_name: string
  email: string
  phone?: string
  tags?: string[]
  source?: string
  custom_fields?: Record<string, string>
}
```

## Examples

Check out the examples page:
- `/subscribe` - Live examples of all form variants
- See `src/app/subscribe/page.tsx` for implementation

## API Reference

### `DataCollectionSDK`

#### Constructor
```typescript
new DataCollectionSDK(config: DataCollectionConfig)
```

#### Methods
- `subscribers` - Subscribers API instance
- `collection(name: string)` - Get collection API instance

### `SubscribersAPI`

#### Methods
- `add(options: AddSubscriberOptions): Promise<Subscriber>`
- `list(page?: number, limit?: number): Promise<ListResult>`
- `get(id: string): Promise<Subscriber>`
- `getByEmail(email: string): Promise<Subscriber>`
- `update(id: string, options: Partial<AddSubscriberOptions>): Promise<Subscriber>`
- `delete(id: string): Promise<void>`
- `unsubscribe(email: string): Promise<void>`

### `CollectionAPI`

#### Methods
- `add(data: Record<string, any>): Promise<DataEntry>`
- `list(page?: number, limit?: number): Promise<ListResult>`
- `get(entryId: string): Promise<DataEntry>`
- `schema(): Promise<DataSchema>`

## Support

For issues or questions, contact support or check the API documentation.

## Blog/Posts Management

### List Published Posts (Public)

```typescript
// Get paginated list of published posts
const result = await sdk.posts.list(1, 20)
console.log(result.posts) // Array of posts
console.log(result.total) // Total count
```

### Get Post by Slug

```typescript
const post = await sdk.posts.getBySlug("my-first-blog-post")
console.log(post.title, post.content)
```

### Get Post by ID

```typescript
const post = await sdk.posts.get("post-id-123")
```

### Get Posts by Author

```typescript
const result = await sdk.posts.getByAuthor("author-id", 1, 10)
```

### Create Post (Requires Auth)

```typescript
await sdk.posts.create({
  title: "My New Blog Post",
  slug: "my-new-blog-post",
  content: {
    time: Date.now(),
    blocks: [
      {
        type: "paragraph",
        data: { text: "Hello world!" }
      }
    ],
    version: "2.28.0"
  },
  excerpt: "A short description",
  published: true
})
```

### Update Post (Requires Auth)

```typescript
await sdk.posts.update("post-id", {
  title: "Updated Title",
  published: true
})
```

### Publish/Unpublish Post

```typescript
// Publish
await sdk.posts.publish("post-id")

// Unpublish
await sdk.posts.unpublish("post-id")
```

### Delete Post (Requires Auth)

```typescript
await sdk.posts.delete("post-id")
```

### Using React Hook

```tsx
import { usePosts } from "@/lib/sdk/provider"
import { useEffect, useState } from "react"

function BlogList() {
  const posts = usePosts()
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const result = await posts.list(1, 20)
      setBlogPosts(result.posts)
    }
    fetchPosts()
  }, [posts])

  return (
    <div>
      {blogPosts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <a href={`/blog/${post.slug}`}>Read more</a>
        </article>
      ))}
    </div>
  )
}
```

### TypeScript Types

```typescript
interface Post {
  id: string
  title: string
  slug: string
  content: string
  parsed?: Record<string, any>
  excerpt: string
  author_id: string
  published: boolean
  published_at?: string
  created_at: string
  updated_at: string
  organization_id: string
}

interface CreatePostOptions {
  title: string
  slug: string
  content: Record<string, any>
  excerpt?: string
  published?: boolean
}
```

## All Available APIs

The SDK provides access to:
- **Subscribers** - `sdk.subscribers.*` or `useSubscribers()`
- **Posts/Blog** - `sdk.posts.*` or `usePosts()`
- **Data Collections** - `sdk.collection(name).*` or `useCollection(name)`
