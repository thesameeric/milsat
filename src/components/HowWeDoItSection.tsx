'use client'
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import DataCollectionIpad from "./svg/collectionIpad";
import IntegrationIpad from "./svg/IntegrationIpad";
import IntelligenceIpad from "./svg/IntelligenceIpad";

const screenContent = [
  {
    id: 1,
    title: "Data Collection",
    image: "/collection.png",
    description: "Multi-modal data acquisition through 5k+ trained field agents",
    sticky: (
      <div className="screen w-full h-full flex flex-col items-center justify-center">
        <DataCollectionIpad />
      </div>
    )
  },
  {
    id: 2,
    title: "Data Integration",
    image: "/integration.svg",
    description: "Seamlessly connect collected data to your databases and tools",
    sticky: (
      <div className="screen w-full h-full flex flex-col items-center justify-center">
        <IntegrationIpad />
      </div>
    )
  },
  {
    id: 3,
    title: "Data Intelligence",
    image: "/sharing.svg",
    description: "Transform data into revenue & impact assets",
    sticky: (
      <div className="screen w-full h-full flex flex-col items-center justify-center">
        <IntelligenceIpad />
      </div>
    )

  }
];

export default function HowWeDoItSection() {
  const t = useTranslations('howWeDoIt');
  const common = useTranslations('common');
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

    // Use a small threshold to ensure the last item is selected when scrolled to bottom
    if (latest > 0.99) {
      setActiveItem(3);
      return;
    }

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
    <section id="how-it-works" className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20" ref={containerRef}>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {t('title')}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-12 sm:mt-20 md:mt-40 relative">
        <div className="w-full lg:w-[500px] mt-12 sm:mt-20 md:mt-40">
          <HowItWorksTextSection ref={item1Ref} image={'/collection.png'} title={t('dataCollection.title')} description={t('dataCollection.description')} isActive={activeItem === 1} learnMore={common('learnMore')} link={"/data/collection"} />
          <HowItWorksTextSection ref={item2Ref} image={'/integration.png'} title={t('dataIntegration.title')} description={t('dataIntegration.description')} isActive={activeItem === 2} learnMore={common('learnMore')} link={"/data/integration"} />
          <HowItWorksTextSection ref={item3Ref} image={'/sharing.png'} title={t('dataIntelligence.title')} description={t('dataIntelligence.description')} isActive={activeItem === 3} learnMore={common('learnMore')} link={"/data/intelligence"} />
        </div>

        {/* Sticky Screen - Right Column */}
        <div className="hidden lg:block sticky top-20 sm:top-32 md:top-40 h-[250px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
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

const HowItWorksTextSection = ({ ref, link, image, title, description, isActive, learnMore }: {
  image: string;
  title: string;
  description: string;
  isActive: boolean;
  learnMore: string;
  link: string;
  ref: any
}) => {
  return <>
    <div
      ref={ref}
      className={cn(
        "item-1 transition-colors duration-300 min-h-[250px] sm:min-h-[600px] lg:min-h-[800px] flex flex-col",
        isActive ? "text-white" : "text-white lg:text-gray-500"
      )}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 flex items-center justify-center">
        <span className="text-xl sm:text-2xl">
          <Image src={image} width={40} height={40} className="sm:w-[50px] sm:h-[50px]" alt={"collection"}></Image>
        </span>
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-8">{title}</h3>
      <p className={cn(
        "mb-6 sm:mb-10 transition-colors duration-300 text-base md:text-2xl",
        isActive ? "text-gray-400" : "text-gray-400 lg:text-gray-600"
      )}>
        {description}
      </p>
      <Link href={link} className={cn(
        "py-2 rounded-md inline-block transition-colors duration-300 w-fit text-base sm:text-lg",
        isActive
          ? "text-blue-500 hover:underline"
          : "text-blue-500 hover:underline lg:text-gray-500 lg:border-gray-500 lg:hover:no-underline"
      )}>
        {learnMore} <ArrowLeft className="inline-block ml-2 mb-1 rotate-145" size={16} />
      </Link>
    </div>
  </>
}
