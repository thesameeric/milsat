"use client"

import { usePosts } from "@/lib/sdk"
import { useEffect, useState } from "react"
import { Post } from "@/lib/sdk/collections"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      <div className='container mx-auto'>
        <div>
          <h2 className='py-10 uppercase tracking-widest text-sm text-gray-400'>Latest Articles</h2>
        </div>
        <ul className="grid gap-10 md:grid-cols-1 lg:grid-cols-3">
          {blogPosts.map((post, index) => <li className='flex py-10' key={index}>
            <div className='w-full'>
              {post.header_image && <Image src={post?.header_image} objectFit="contain" width={100} height={150} alt={post.title} className='rounded-sm w-full h-[250px] object-cover overflow-hidden' />}
              <span className='flex items-center gap-x-5 text-sm py-3'>
                <p className='text-xs text-gray-300 uppercase tracking-widest'>{dayjs(post.created_at).format('MMMM DD, YYYY')}</p>
                <p className='text-xs text-[#08C4DE] hover:underline'>Gis</p>
              </span>
              <Link className='inline-block font-semibold hover:text-[#08C4DE] hover:underline text-xl pb-5' href={`/blog/${post.slug}`}>{post.title}</Link>
              <span>
                <p className='text-[16px] pb-5 text-gray-400 truncate'>{post.excerpt}</p>
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
    </div>
  )
}

export default function BlogClient() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg text-muted-foreground">Latest articles and updates</p>
        </div>
        <BlogList />
      </div>
    </div>
  )
}
