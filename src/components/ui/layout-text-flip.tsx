"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = [],
  duration = 9000,
}: {
  text: string;
  words: any[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="tracking-tight drop-shadow-lg md:text-4xl"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative w-fit overflow-hidden text-gray-300 rounded-md px-4 py-2 font-sans tracking-tight"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.9,
            }}
            className={cn("flex flex-col whitespace-nowrap")}
          >
            <span className="flex mb-1">
              <p className="bg-red-500 font-bold inline-block rounded-md mr-3 px-3 py-1.5 text-sm">{words[currentIndex].tag}</p>
            </span>
            {words[currentIndex].insight}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
