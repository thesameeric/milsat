"use client";

import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  className?: string;
  children?: React.ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  videoSrc,
  className,
  children,
}: HeroSectionProps) {
  return (
    <section className={cn("container flex flex-col md:flex-row items-center justify-between mx-auto my-20 md:my-40 px-5 md:px-0 gap-10", className)}>
      <div className="w-full md:w-6/12">
        <h1 className="text-5xl md:text-7xl">{title}</h1>
        <span className="flex mt-6 md:mt-10">
          <p className="text-gray-400 text-lg md:text-xl">
            {subtitle}
          </p>
        </span>
        {children && (
          <span className="flex pt-10">
            {children}
          </span>
        )}
      </div>
      <div className="w-full md:w-5/12">
        <video
          controls={false}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-auto rounded-lg max-w-4xl"
          src={videoSrc}
        />
      </div>
    </section>
  );
}
