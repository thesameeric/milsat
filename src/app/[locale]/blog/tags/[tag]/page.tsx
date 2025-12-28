import { Metadata } from "next"
import TagClient from "../../TagClient"

type Props = {
    params: Promise<{ tag: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { tag } = await params
    const decodedTag = decodeURIComponent(tag)
    const title = `Posts tagged with "${decodedTag}" - Milsat Blog`
    const description = `Browse articles tagged with ${decodedTag} on Milsat Blog.`

    return {
        title,
        description,
        keywords: [decodedTag, "Milsat", "Blog", "Africa", "Technology", "Data"],
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://milsat.africa/blog/tags/${tag}`,
            images: [
                {
                    url: "/og-blog.png",
                    width: 1200,
                    height: 630,
                    alt: `Milsat Blog - ${decodedTag}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-blog.png"],
        },
        alternates: {
            canonical: `https://milsat.africa/blog/tags/${tag}`,
        },
    }
}

export default async function TagPage({ params }: Props) {
    const { tag } = await params
    return <TagClient tag={tag} />
}
