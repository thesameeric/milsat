import { MetadataRoute } from 'next'

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

  // // Fetch dynamic blog posts
  // let blogPosts: MetadataRoute.Sitemap = []
  // try {
  //   const response = await fetch(`http://localhost:8080/api/v1/organizations/690fa6b7173674214101016b/posts?page=1&limit=100`)
  //   if (response.ok) {
  //     const data = await response.json()
  //     blogPosts = data.posts.map((post: any) => ({
  //       url: `${baseUrl}/blog/${post.slug}`,
  //       lastModified: new Date(post.updated_at || post.created_at),
  //       changeFrequency: 'weekly' as const,
  //       priority: 0.7,
  //     }))
  //   }
  // } catch (error) {
  //   console.error('Error fetching blog posts for sitemap:', error)
  // }

  // // Fetch dynamic publications
  // let publications: MetadataRoute.Sitemap = []
  // try {
  //   const response = await fetch(`http://localhost:8080/api/v1/organizations/690fa6b7173674214101016b/data/publications/entries?page=1&limit=100`)
  //   if (response.ok) {
  //     const data = await response.json()
  //     publications = data.entries.map((entry: any) => ({
  //       url: `${baseUrl}/publications/${entry.id}`,
  //       lastModified: new Date(entry.created_at),
  //       changeFrequency: 'monthly' as const,
  //       priority: 0.6,
  //     }))
  //   }
  // } catch (error) {
  //   console.error('Error fetching publications for sitemap:', error)
  // }

  return [...staticRoutes]
}
