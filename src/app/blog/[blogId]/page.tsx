import { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"
import { createDataCollectionSDK } from "@/lib/sdk"

type Props = {
  params: Promise<{ blogId: string }>
}

// Create SDK instance for server-side use
const sdk = createDataCollectionSDK({
  apiUrl: "https://api.letterhead.cloud",
  organizationId: "690fa6b7173674214101016b",
  apiKey: 'gol_15f04352ccc6e6de5ff8a8bc7fa33d6ed40946e36b921edecfd722f91fe7c99d',
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogId } = await params

  // Fetch the blog post to get metadata using SDK
  try {
    const post = await sdk.posts.getBySlug(blogId)

    const title = post.metadata?.seo_title || post.title
    const description = post.metadata?.seo_description || post.excerpt || post.title
    const keywords = post.metadata?.seo_tags || []
    const image = post.header_image || '/og-blog.png'
    const publishedTime = post.published_at || post.created_at
    const modifiedTime = post.updated_at

    return {
      title,
      description,
      keywords,
      authors: [{ name: "Milsat Africa" }],
      openGraph: {
        title,
        description,
        url: `https://milsat.africa/blog/${post.slug}`,
        type: "article",
        publishedTime,
        modifiedTime,
        authors: ["Milsat Africa"],
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "@milsatafrica",
      },
      alternates: {
        canonical: `https://milsat.africa/blog/${post.slug}`,
      },
    }
  } catch (error) {
    // Fallback metadata if post fetch fails
    return {
      title: "Blog Post",
      description: "Read the latest articles from Milsat on African data and technology.",
    }
  }
}

export default async function BlogPost({ params }: Props) {
  const { blogId } = await params

  // Fetch post data for JSON-LD using SDK
  let jsonLd = null
  try {
    const post = await sdk.posts.getBySlug(blogId)
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt || post.title,
      image: post.header_image,
      datePublished: post.published_at || post.created_at,
      dateModified: post.updated_at,
      author: {
        '@type': 'Organization',
        name: 'Milsat Africa',
        url: 'https://milsat.africa',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Milsat Africa',
        url: 'https://milsat.africa',
        logo: {
          '@type': 'ImageObject',
          url: 'https://milsat.africa/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://milsat.africa/blog/${post.slug}`,
      },
    }
  } catch (error) {
    console.error('Error fetching post for JSON-LD:', error)
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPostClient />
    </>
  )
}
