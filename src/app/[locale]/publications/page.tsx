"use client";

import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";
import { useCollection } from "@letterhead/core/react";
import { useEffect, useState } from "react";

interface PaperDoc {
    hash: string;
    name: string;
    size: number;
    type: string;
    url: string;
}

interface Paper {
    id: string;
    Title: string;
    Authors: string;
    Description: string;
    field: string;
    created_at: string;
    doc: PaperDoc;
}

function truncateWords(text: string, wordLimit: number): string {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
}

export default function Publications() {
    const papersCollection = useCollection("papers");
    const [papers, setPapers] = useState<Paper[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPapers() {
            try {
                const result = await papersCollection.list(1, 100);
                setPapers(result.data as Paper[]);
            } catch (err: any) {
                setError(err.message || "Failed to load publications");
                console.error("Error fetching papers:", err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPapers();
    }, [papersCollection]);

    if (isLoading) {
        return (
            <div className="container mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8 sm:mb-12">
                        <div className="h-10 sm:h-12 bg-neutral-800 rounded w-48 sm:w-64 mb-3 sm:mb-4 animate-pulse" />
                        <div className="h-6 bg-neutral-800 rounded w-32 sm:w-48 animate-pulse" />
                    </div>
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="border-dashed border-[#27272a] border-b pb-6 sm:pb-8 md:pb-10 mb-6 sm:mb-8 animate-pulse">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
                                <div className="flex items-center gap-2 sm:gap-x-3">
                                    <div className="h-4 bg-neutral-800 rounded w-24 sm:w-32" />
                                    <div className="h-4 bg-neutral-800 rounded w-24 sm:w-32" />
                                </div>
                                <div className="h-4 bg-neutral-800 rounded w-20 sm:w-24" />
                            </div>
                            <div className="h-6 sm:h-8 bg-neutral-800 rounded w-full sm:w-3/4 mb-4" />
                            <div className="h-16 sm:h-20 bg-neutral-800 rounded w-full mb-4" />
                            <div className="h-6 bg-neutral-800 rounded w-32 sm:w-48" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8">
                <div className="text-center py-12">
                    <p className="text-destructive mb-2 text-base sm:text-lg">Failed to load publications</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{error}</p>
                </div>
            </div>
        );
    }

    if (papers.length === 0) {
        return (
            <div className="container mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8">
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-base sm:text-lg">No publications available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Publications</h1>
                    <p className="text-base sm:text-lg text-gray-400">Research papers and publications</p>
                </div>
                <ul className="space-y-6 sm:space-y-8">
                    {papers.map((paper, index) => {
                        // Parse authors string into array
                        const authors = paper.Authors.split(',').map(a => a.trim());

                        return (
                            <li className="border-dashed border-[#27272a] border-b pb-6 sm:pb-8 md:pb-10" key={paper.id}>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-x-3">
                                        {authors.map((author, i) => (
                                            <p className="text-xs sm:text-sm text-gray-300" key={i}>
                                                {author}{i < authors.length - 1 && ','}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4 sm:mb-6">
                                    <Link
                                        href={`publications/${paper.id}`}
                                        className="inline-block text-lg sm:text-xl md:text-2xl font-semibold hover:text-primary transition-colors leading-tight"
                                    >
                                        {paper.Title}
                                    </Link>
                                </div>
                                <div className="mb-4 sm:mb-6">
                                    <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-gray-400">
                                        {truncateWords(paper.Description, 40)}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs sm:text-sm">
                                        {paper.field}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}