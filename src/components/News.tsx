"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { usePosts } from "@letterhead/core/react";
import { useEffect, useState } from "react";
import { Post } from "@letterhead/core";
import { parseEditorJS } from "@/lib/editorjs-parser";

export function NewsItem() {
    const posts = usePosts();
    const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchFeaturedPosts() {
            try {
                // Fetch only featured posts
                const result = await posts.list(1, 10, true, undefined);
                setFeaturedPosts(result.posts);
            } catch (err) {
                console.error("Error fetching featured posts:", err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchFeaturedPosts();
    }, [posts]);

    if (isLoading) {
        return (
            <div className="w-full h-full py-40">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl">
                    As seen on the News
                </h2>
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="flex gap-4 overflow-hidden">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-80 h-96 bg-neutral-800 rounded-3xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (featuredPosts === null || featuredPosts.length === 0) {
        return (
            <div className="w-full h-full py-40">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl">
                    As seen on the News
                </h2>
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <p className="text-neutral-400">No featured posts available</p>
                </div>
            </div>
        );
    }

    const cards = featuredPosts.map((post, index) => {
        const contentData = typeof post.content === "string"
            ? JSON.parse(post.content)
            : post.parsed || post.content;
        let parsedContent = null;

        if (contentData) {
            parsedContent = parseEditorJS(contentData)
        }
        const cardData = {
            category: post.metadata?.seo_tags?.[0] || "News",
            title: post.title,
            src: post.header_image || "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
            content: (
                <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                    <article className="blog_post">
                        {parsedContent && <div dangerouslySetInnerHTML={{ __html: parsedContent }} />}
                    </article>
                </div>
            ),
        };
        return <Card key={post.id} card={cardData} index={index} />;
    });

    return (
        <div className="w-full h-full py-40">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl">
                As seen on the News
            </h2>
            <Carousel items={cards} />
        </div>
    );
}
