/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isScrollingProgrammatically = useRef(false);
    const lastScrollTime = useRef(0);
    const scrollTimeout = useRef<NodeJS.Timeout>();

    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (isScrollingProgrammatically.current) return;

        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
        "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
        "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    // Handle scroll snapping with debounce
    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const handleScroll = () => {
            const now = Date.now();
            const timeSinceLastScroll = now - lastScrollTime.current;
            lastScrollTime.current = now;

            // Clear existing timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Debounce scroll - snap to nearest card after scrolling stops
            scrollTimeout.current = setTimeout(() => {
                if (isScrollingProgrammatically.current) return;

                const scrollTop = container.scrollTop;
                const containerHeight = container.clientHeight;

                // Calculate which card should be active based on scroll position
                const cardHeight = containerHeight; // Each card takes full viewport height
                const targetIndex = Math.round(scrollTop / cardHeight);
                const clampedIndex = Math.max(0, Math.min(targetIndex, content.length - 1));

                // Snap to the target card
                isScrollingProgrammatically.current = true;
                cardRefs.current[clampedIndex]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });

                setTimeout(() => {
                    isScrollingProgrammatically.current = false;
                }, 500);

                setActiveCard(clampedIndex);
            }, timeSinceLastScroll < 50 ? 150 : 100); // Shorter delay for slow scrolls
        };

        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            container.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [content.length]);

    return (
        <motion.div
            className="relative flex h-[500px] overflow-y-auto container mx-auto px-8 py-20"
            style={{
                scrollSnapType: 'y mandatory',
                scrollBehavior: 'smooth',
            }}
            ref={ref}
        >
            <div className="w-6/12">
                {content.map((item, index) => (
                    <div
                        key={item.title + index}
                        className="my-20 flex flex-col items-start h-[500px]"
                        style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                    >
                        <motion.h2
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-4xl font-bold text-slate-100"
                        >
                            {item.title}
                        </motion.h2>
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="mt-10 max-w-sm text-slate-300"
                        >
                            {item.description}
                        </motion.p>
                        <motion.button
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="mt-10 max-w-sm text-slate-300"

                        >
                            Learn More
                        </motion.button>
                    </div>
                ))}
            </div>
            <div
                className={cn(
                    "sticky top-0 hidden w-6/12 mx-auto lg:block bg-green-900",
                    contentClassName,
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
