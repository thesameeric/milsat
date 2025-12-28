"use client";

import { Button } from "@/components/ui/button";
import dayjs from 'dayjs';
import { useCollection } from "@/lib/sdk";
import { useEffect, useState } from "react";
import React from "react";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

import { DownloadGateModal } from "@/components/DownloadGateModal";

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

export default function PublicationPage({ params }: { params: Promise<{ publicationId: string }> }) {
    const papersCollection = useCollection("papers");
    const { publicationId } = React.use(params);

    const [paper, setPaper] = useState<Paper | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    const handleDownload = () => {
        if (paper?.doc.url) {
            const link = document.createElement('a');
            link.href = paper.doc.url;
            link.target = '_blank';
            link.download = paper.doc.name || 'document';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    useEffect(() => {
        async function fetchPaper() {
            try {
                const result = await papersCollection.get(publicationId);
                setPaper(result?.data as Paper);
            } catch (err: any) {
                setError(err.message || "Failed to load publication");
                console.error("Error fetching paper:", err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPaper();
    }, [papersCollection, publicationId]);

    if (isLoading) {
        return (
            <div className="container mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8">
                <div className="max-w-5xl mx-auto animate-pulse">
                    <div className="mb-6 sm:mb-8">
                        <div className="h-8 sm:h-10 bg-neutral-800 rounded w-32 sm:w-40" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 md:mb-20">
                        <div className="h-10 sm:h-12 md:h-16 bg-neutral-800 rounded w-full sm:w-3/4 mb-6 sm:mb-8" />
                        <div className="flex gap-2 sm:gap-3">
                            <div className="h-4 bg-neutral-800 rounded w-20 sm:w-32" />
                            <div className="h-4 bg-neutral-800 rounded w-20 sm:w-32" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                        <div className="lg:w-8/12">
                            <div className="h-8 sm:h-10 bg-neutral-800 rounded w-32 sm:w-40 mb-4 sm:mb-6" />
                            <div className="space-y-3">
                                <div className="h-4 bg-neutral-800 rounded w-full" />
                                <div className="h-4 bg-neutral-800 rounded w-full" />
                                <div className="h-4 bg-neutral-800 rounded w-3/4" />
                            </div>
                        </div>
                        <div className="lg:w-4/12">
                            <div className="h-48 sm:h-64 bg-neutral-800 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !paper) {
        return (
            <div className="container mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8">
                <div className="max-w-3xl mx-auto text-center py-12">
                    <p className="text-destructive mb-2 text-base sm:text-lg">Failed to load publication</p>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6">{error || "Publication not found"}</p>
                    <Link href="/publications">
                        <Button variant="outline" className="text-sm sm:text-base">
                            <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Back to Publications
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Parse authors string into array
    const authors = paper?.Authors.split(',').map(a => a.trim());

    return (
        <div className="container mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-6 sm:mb-8">
                    <Link href="/publications">
                        <Button variant="ghost" size="sm" className="text-sm sm:text-base">
                            <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Back to Publications
                        </Button>
                    </Link>
                </div>

                <section className="mb-12 sm:mb-16 md:mb-20">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10">
                            {paper.Title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                            {authors.map((name, i) => (
                                <span key={i} className="whitespace-nowrap">
                                    {name}{i < authors.length - 1 && ','}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10">
                        <div className="lg:w-8/12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">
                                Abstract
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-200 tracking-wide leading-relaxed sm:leading-loose">
                                {paper.Description}
                            </p>
                        </div>
                        <div className="lg:w-4/12">
                            <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-8 p-6 sm:p-8 bg-neutral-900 rounded-lg border border-neutral-800">
                                <Button
                                    onClick={() => setIsDownloadModalOpen(true)}
                                    className="w-full cursor-pointer border hover:text-gray-400 text-sm sm:text-base"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Paper
                                </Button>
                                <div className="text-center lg:text-left w-full">
                                    <p className="text-xs sm:text-sm text-gray-400 mb-2">Research Area</p>
                                    <p className="font-semibold text-sm sm:text-base">{paper.field}</p>
                                </div>
                                <div className="text-center lg:text-left w-full">
                                    <p className="text-xs sm:text-sm text-gray-400 mb-2">Published</p>
                                    <p className="text-sm sm:text-base">
                                        {dayjs(paper.created_at).format('MMMM DD, YYYY')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <DownloadGateModal
                    isOpen={isDownloadModalOpen}
                    onOpenChange={setIsDownloadModalOpen}
                    onSuccess={handleDownload}
                    itemName={paper.Title}
                />
            </div>
        </div>
    );
}