'use client'
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DataCollectionSvg } from "./DataCollectionSvg";
import { ArrowLeft } from "lucide-react";
import { DataIntegrationSvg } from "./DataIntegrationSvg";

const screenContent = [
  {
    id: 1,
    title: "Data Collection",
    image: "/collection.png",
    description: "Multi-modal data acquisition through 5k+ trained field agents",
    sticky: (
      <div className="screen w-full h-full flex flex-col items-center justify-center">
        <DataCollectionSvg />
      </div>
    )
  },
  {
    id: 2,
    title: "Data Integration",
    image: "/integration.png",
    description: "Seamlessly connect collected data to your databases and tools",
    sticky: (
      <div className="screen w-full h-full flex flex-col items-center justify-center">
        <DataIntegrationSvg />
      </div>
    )
  },
  {
    id: 3,
    title: "Data Intelligence",
    image: "/sharing.png",
    description: "Transform data into revenue & impact assets",
    sticky: (
      <div className="screen w-full h-full flex flex-col items-center justify-center">
        <DataCollectionSvg />
      </div>
    )

  }
];

export default function HowWeDoItSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);

  const [activeItem, setActiveItem] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!item1Ref.current || !item2Ref.current || !item3Ref.current) return;

    const item1Rect = item1Ref.current.getBoundingClientRect();
    const item2Rect = item2Ref.current.getBoundingClientRect();
    const item3Rect = item3Ref.current.getBoundingClientRect();

    const centerY = window.innerHeight / 2;

    // Check which item is closest to center of viewport
    const item1Distance = Math.abs((item1Rect.top + item1Rect.height / 2) - centerY);
    const item2Distance = Math.abs((item2Rect.top + item2Rect.height / 2) - centerY);
    const item3Distance = Math.abs((item3Rect.top + item3Rect.height / 2) - centerY);

    const minDistance = Math.min(item1Distance, item2Distance, item3Distance);

    if (minDistance === item1Distance) {
      setActiveItem(1);
    } else if (minDistance === item2Distance) {
      setActiveItem(2);
    } else if (minDistance === item3Distance) {
      setActiveItem(3);
    }
  });

  const activeContent = screenContent.find(item => item.id === activeItem);

  return (
    <section id="how-it-works" className="container mx-auto px-8 py-20" ref={containerRef}>
      <h2 className="text-4xl md:text-5xl mt-40">
        How We do it
      </h2>

      <div className="grid md:grid-cols-2 gap-16 mt-40 relative">
        <div className="w-full md:w-[500px] mt-40">
          <div
            ref={item1Ref}
            className={cn(
              "item-1 transition-colors duration-300 min-h-[800px] flex flex-col",
              activeItem === 1 ? "text-white" : "text-gray-500"
            )}
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <span className="text-2xl">
                <Image src={'/collection.png'} width={50} height={50} alt={"collection"}></Image>
              </span>
            </div>
            <h3 className="text-3xl font-medium mb-4">Data Collection</h3>
            <p className={cn(
              "mb-10 transition-colors duration-300",
              activeItem === 1 ? "text-gray-300" : "text-gray-600"
            )}>
              Multi-modal data acquisition through 5k+ trained field agents, IoT sensors for unreachable areas,
              and AI for smart extrapolation
            </p>
            <a href="#" className={cn(
              "py-2 rounded-md inline-block transition-colors duration-300 w-fit",
              activeItem === 1
                ? "text-blue-500 hover:underline"
                : "text-gray-500 border-gray-500"
            )}>
              Learn more <ArrowLeft className="inline-block ml-2 mb-1 rotate-145" size={16} />
            </a>
          </div>

          <div
            ref={item2Ref}
            className={cn(
              "item-2 transition-colors duration-300 min-h-[800px]  flex flex-col justify-start",
              activeItem === 2 ? "text-white" : "text-gray-500"
            )}
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <span className="text-2xl">
                <Image src={'/integration.png'} width={50} height={50} alt={"integration"}></Image>
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Data Integration</h3>
            <p className={cn(
              "mb-6 transition-colors duration-300",
              activeItem === 2 ? "text-gray-300" : "text-gray-600"
            )}>
              Seamlessly connect collected data to your databases, tools (PowerBI, CRMs), and customer-facing
              platforms for operational value
            </p>
            <a href="#" className={cn(
              "py-2 rounded-md inline-block transition-colors duration-300 w-fit",
              activeItem === 2
                ? "text-blue-500 hover:underline"
                : "text-gray-500 border-gray-500"
            )}>
              Learn more <ArrowLeft className="inline-block ml-2 mb-1 rotate-145" size={16} />
            </a>
          </div>

          <div
            ref={item3Ref}
            className={cn(
              "item-3 transition-colors duration-300 min-h-[800px] flex flex-col justify-start",
              activeItem === 3 ? "text-white" : "text-gray-500"
            )}
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <span className="text-2xl">
                <Image src={'/sharing.png'} width={50} height={50} alt={"sharing"}></Image>
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Data Intelligence</h3>
            <p className={cn(
              "mb-6 transition-colors duration-300",
              activeItem === 3 ? "text-gray-300" : "text-gray-600"
            )}>
              Transform data into revenue & impact assets via blockchain-secured sharing for monetization,
              research, and social good
            </p>
            <a href="#" className={cn(
              "py-2 rounded-md inline-block transition-colors duration-300 w-fit",
              activeItem === 3
                ? "text-blue-500 hover:underline"
                : "text-gray-500 border-gray-500"
            )}>
              Learn more <ArrowLeft className="inline-block ml-2 mb-1 rotate-145" size={16} />
            </a>
          </div>
        </div>

        {/* Sticky Screen - Right Column */}
        <div className="sticky top-40 h-[600px] flex items-center justify-center">
          <motion.div
            key={activeItem}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="screen w-full h-full flex flex-col items-center justify-center"
          >
            {activeContent?.sticky}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
