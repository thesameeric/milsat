"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  image?: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  autoplayInterval = 5000,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  autoplayInterval?: number;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = propTabs.findIndex(tab => tab.value === active.value);
      const nextIndex = (currentIndex + 1) % propTabs.length;
      moveSelectedTabToTop(nextIndex);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [active, propTabs, autoplayInterval]);

  const goToPrevious = () => {
    const currentIndex = propTabs.findIndex(tab => tab.value === active.value);
    const previousIndex = (currentIndex - 1 + propTabs.length) % propTabs.length;
    moveSelectedTabToTop(previousIndex);
  };

  const goToNext = () => {
    const currentIndex = propTabs.findIndex(tab => tab.value === active.value);
    const nextIndex = (currentIndex + 1) % propTabs.length;
    moveSelectedTabToTop(nextIndex);
  };

  return (
    <>
      <div className="flex items-center gap-4 w-full">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="flex-shrink-0 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Tabs Container */}
        <div
          className={cn(
            "flex flex-row items-center gap-x-10 justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
            containerClassName
          )}
        >
          {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-2 text-sm py-2 cursor-pointer overflow-hidden", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-zinc-800 rounded-lg",
                  activeTabClassName
                )}
              />
            )}

            {tab.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={cn(
                  "relative block object-contain h-14 transition-all duration-300",
                  active.value !== tab.value && "grayscale opacity-60"
                )}
                src={tab.image}
                alt={tab.title}
              />
            ) : null}
          </button>
        ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-20", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-[300px] md:h-[300px]">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
