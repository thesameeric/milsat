import { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Blog - Latest Articles on African Data & Technology",
  description: "Read the latest insights, case studies, and updates from Milsat on data collection, geospatial intelligence, and technology solutions across Africa.",
  keywords: [
    "African data blog",
    "geospatial intelligence articles",
    "data collection insights",
    "African technology blog",
    "Milsat blog",
    "field mapping articles",
    "business intelligence Africa"
  ],
  openGraph: {
    title: "Milsat Blog - Latest Articles on African Data & Technology",
    description: "Read the latest insights, case studies, and updates from Milsat on data collection, geospatial intelligence, and technology solutions across Africa.",
    url: "https://milsat.africa/blog",
    type: "website",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Milsat Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milsat Blog - Latest Articles on African Data & Technology",
    description: "Read the latest insights, case studies, and updates from Milsat on data collection, geospatial intelligence, and technology solutions across Africa.",
    images: ["/og-blog.png"],
  },
  alternates: {
    canonical: "https://milsat.africa/blog",
  },
}

export default function BlogPage() {
  return <BlogClient />
}
