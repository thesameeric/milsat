"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
    imageWidth?: number;
    imageHeight?: number;
    className?: string;
    imageClassName?: string;
}

export function FeatureSection({
    title,
    description,
    imageSrc,
    imageAlt,
    imagePosition = 'right',
    imageWidth = 550,
    imageHeight = 400,
    className,
    imageClassName,
}: FeatureSectionProps) {
    return (
        <section className={cn(
            "container flex flex-col-reverse justify-between items-center mx-auto py-20 md:py-40 px-5 md:px-0 gap-x-5 md:gap-x-10",
            imagePosition === 'left' ? "md:flex-row-reverse" : "md:flex-row",
            className
        )}>
            <div className="w-full md:w-6/12 mt-10 md:mt-0">
                <h2 className="text-5xl leading-15">{title}</h2>
                <span className="inline-block pt-10">
                    <p>{description}</p>
                </span>
            </div>
            <div>
                <Image
                    width={imageWidth}
                    height={imageHeight}
                    className={cn("rounded-lg object-cover", imageClassName)}
                    src={imageSrc}
                    alt={imageAlt}
                />
            </div>
        </section>
    );
}
