"use client"

import { parseEditorJS, extractHeaders } from "@/lib/editorjs-parser"
import TableOfContents from "@/components/TableOfContents"
import { usePosts } from "@/lib/sdk"
import { useEffect, useState } from "react"
import { Post } from "@/lib/sdk/collections"
import { useParams } from "next/navigation"
import Link from "next/link"
import './blog.scss'
import { ArrowLeft } from 'lucide-react';

function BlogPostContent() {
  const params = useParams()
  const blogId = params.blogId as string
  const posts = usePosts()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        // Try to fetch by slug first, if that fails try by ID
        const fetchedPost = await posts.getBySlug(blogId).catch(() => posts.get(blogId))
        setPost(fetchedPost)
      } catch (err: any) {
        setError(err.message || "Failed to load post")
        console.error("Error fetching post:", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPost()
  }, [blogId, posts])

  if (isLoading) {
    return (
      <div className="container mx-auto py-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-12 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="space-y-3 mt-8">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="container mx-auto py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Parse the content (could be stored as string or object)
  let parsedContent
  let headers: any[] = []

  try {
    const contentData = typeof post.content === "string"
      ? JSON.parse(post.content)
      : post.parsed || post.content

    if (contentData) {
      headers = extractHeaders(contentData)
      parsedContent = parseEditorJS(contentData)
    }
  } catch (err) {
    console.error("Error parsing content:", err)
    parsedContent = post.content
  }

  return (
    <div className="container mx-auto py-20">

      {/* Content with TOC */}
      <div className="blog-layout">
        {headers.length > 0 && (
          <aside className="toc-sidebar">
            <TableOfContents headers={headers} />
          </aside>
        )}
        <div>
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <Link
              href="/blog"
              className="inline-flex text-[16px] items-center text-gray-400 hover:text-gray-500 mb-6"
            >
              <ArrowLeft /> Back to Blog
            </Link>

            <div className="space-y-4">
              <h1 className="text-[2.5rem]">{post.title}</h1>

              <div className="flex items-center text-sm text-gray-400">
                <span className="uppercase font-medium tracking-wider">
                  {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
          <article className="blog_post">
            {parsedContent ? (
              <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
            ) : (
              <div className="prose prose-lg max-w-none">
                <p>Content not available</p>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  )
}

export default function BlogPost() {
  return <BlogPostContent />
}
