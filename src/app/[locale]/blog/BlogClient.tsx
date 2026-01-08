"use client"

import { usePosts } from "@letterhead/core/react"
import { useEffect, useState } from "react"
import { Post } from "@letterhead/core"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import dayjs from "dayjs"
import Image from "next/image"

function BlogList() {
  const posts = usePosts()
  const [blogPosts, setBlogPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const result = await posts.list(1, 50)
        setBlogPosts(result.posts)
      } catch (err: any) {
        setError(err.message || "Failed to load posts")
        console.error("Error fetching posts:", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [posts])

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted rounded w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="h-20 bg-muted rounded w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive mb-2">Failed to load posts</p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    )
  }

  if (blogPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blog posts found</p>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h2 className='py-6 sm:py-10 uppercase tracking-widest text-sm text-gray-400'>Latest Articles</h2>
      </div>
      <ul className="grid gap-6 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => <li className='flex py-6 sm:py-10' key={index}>
          <div className='w-full'>
            {post.header_image && <Image src={post?.header_image} objectFit="contain" width={100} height={150} alt={post.title} className='rounded-sm w-full h-[200px] sm:h-[250px] object-cover overflow-hidden' />}
            <span className='flex items-center gap-x-3 sm:gap-x-5 text-sm py-3'>
              <p className='text-xs text-gray-300 uppercase tracking-widest'>{dayjs(post.created_at).format('MMMM DD, YYYY')}</p>
              {(() => {
                const displayTags = post.metadata?.seo_tags || post.tags || [];
                // Only show first 2 tags
                const tagsToShow = displayTags.slice(0, 2);

                return tagsToShow.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {tagsToShow.map((tag, idx) => (
                      <Link key={idx} href={`/blog/tags/${tag}`} className='text-xs text-[#08C4DE] hover:underline'>
                        {tag}
                      </Link>
                    ))}
                  </div>
                ) : null;
              })()}
            </span>
            <Link className='inline-block font-semibold hover:text-[#08C4DE] hover:underline text-lg sm:text-xl pb-5 break-words' href={`/blog/${post.slug}`}>{post.title}</Link>
            <span>
              <p className='text-sm sm:text-base pb-5 text-gray-400 line-clamp-3'>{post.excerpt}</p>
            </span>
            {/*<span className='flex items-center'>
              <Image src={post.authorImage} width={30} height={30} alt={post.authorImage} className='rounded-full' />
              <p className='font-semibold text-[16px] pl-3'>{post.author}</p>
            </span>*/}
          </div>
          <div>
            {/* <Image objectFit='cover' src={post.image} alt={post.title} width={450} height={300} className='rounded-lg' /> */}
          </div>
        </li>)}
      </ul>
    </div>
  )
}

export default function BlogClient() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Blog</h1>
          <p className="text-base sm:text-lg text-muted-foreground">Latest articles and updates</p>
        </div>
        <BlogList />
      </div>
    </div>
  )
}
