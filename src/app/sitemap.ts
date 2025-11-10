import { MetadataRoute } from 'next'
import { createDataCollectionSDK } from '@/lib/sdk'

// Create SDK instance for server-side use
const sdk = createDataCollectionSDK({
  apiUrl: "http://localhost:8080",
  organizationId: "690fa6b7173674214101016b",
  apiKey: 'gol_15f04352ccc6e6de5ff8a8bc7fa33d6ed40946e36b921edecfd722f91fe7c99d',
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://milsat.africa'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/subscribe`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/try`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/data/collection`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/data/intelligence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/data/integration`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Fetch dynamic blog posts using SDK
  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const data = await sdk.posts.list(1, 100)
    blogPosts = data.posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || post.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Fetch dynamic publications using SDK
  let publications: MetadataRoute.Sitemap = []
  try {
    const publicationsData = await sdk.collection('publications').list(1, 100)
    publications = publicationsData.data.map((entry: any) => ({
      url: `${baseUrl}/publications/${entry.id}`,
      lastModified: new Date(entry.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error fetching publications for sitemap:', error)
  }

  return [...staticRoutes, ...blogPosts, ...publications]
}
