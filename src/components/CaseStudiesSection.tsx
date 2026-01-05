'use client';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Image from 'next/image';
import CaseStudyContent from "./CaseStudyContent";


const tabs = [
  {
    title: "Statistics Sierra Leone",
    value: "Statistics Sierra Leone",
    image: '/clients/sls.png',
    content: (
      <CaseStudyContent
        title="Census and Enumeration Area Declination"
        description="Country-wide deployment of custom geo app, algorithms and web tools for national census planning, settlement identification and full digital creation of enumeration area boundaries, building footprints and Point of Interest."
      />
    ),
  },
  {
    title: "National Population Commission",
    value: "National Population Commission",
    image: '/clients/npc.png',
    content: (
      <CaseStudyContent
        title="Enumeration Area Delineation and Baseline Mapping"
        description="Field technology customization and support for Nigeria's first digital nation-wide mapping of over 100 million geospatial datasets consisting of localities, buildings, roads and population estimate."
      />
    ),
  },
  {
    title: "Nigeria Postcode Service",
    value: "Nigeria Postcode Service",
    image: '/clients/nipost2.jpg',
    content: (
      <CaseStudyContent
        title="Nigeria's First Digital Postcode System"
        description="Providing technology and geospatial modelling support for the generation of 60million+ digital alphanumeric postcode system to support national addressing system, logistics and delivery precision."
      />
    ),
  },
  {
    title: "Ekiti State Internal Revenue Service",
    value: "Ekiti State Internal Revenue Service",
    image: '/clients/ekrs.png',
    content: (
      <CaseStudyContent
        title="Property Mapping for Equitable Taxation"
        description="LGA-wide property mapping of 170000+ buildings with classification and annotation to maximize tax coverage and enhance revenue growth through improved digital billing, tracking, and revenue collection."
      />
    ),
  },
  {
    title: "United Nations Development Program",
    value: "United Nations Development Program",
    image: '/clients/undp.png',
    content: (
      <CaseStudyContent
        title="Enumeration and Profiling of Artisanal Miners in Africa"
        description="Structured identification and enumeration of artisanal miners for a needs assessment, enabling health insurance, financial inclusion, access to equipment, and climate resilience through service partnerships."
      />
    ),
  },
  {
    title: "Sabi",
    value: "Sabi",
    image: '/clients/sabi.svg',
    content: (
      <CaseStudyContent
        title="Farmers and aggregators profiling for cocoa ESG traceability"
        description="Acquisition of verified field data on farms, farmers, aggregators, and aggregation methods, along with accurate ESG ratings, to understand the traceability of cocoa movement from farms to processing across the cocoa value chain."
      />
    ),
  }
];

export default function CaseStudiesSection({ autoplay = false }: { autoplay?: boolean }) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % tabs.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && tabs.length > 0) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="md:max-w-5/12">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12">
          Customers using our expertise to solve real problems
        </h2>
      </div>

      <div className="bg-[#150040] rounded-lg p-6 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <div>
              <div className="flex gap-3 sm:gap-4 pt-0 mb-6 sm:mb-8 md:mb-10">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <IconArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                </button>
              </div>
            </div>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {tabs[active].content}
            </motion.div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <div
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full backdrop-blur-sm flex items-center justify-center bg-cover bg-center relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" viewBox="0 0 668 718" fill="none" className="absolute">
                <g filter="url(#filter0_f_8855_3695)">
                  <path d="M467.786 382.044C467.398 481.781 362.075 562.417 232.541 562.148C103.008 561.879 -1.68484 480.809 -1.29612 381.071C-0.907403 281.334 104.415 200.699 233.949 200.967C363.483 201.236 468.175 282.307 467.786 382.044Z" fill="url(#paint0_linear_8855_3695)" />
                </g>
                <defs>
                  <filter id="filter0_f_8855_3695" x="-201.297" y="0.966797" width="869.085" height="761.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_8855_3695" />
                  </filter>
                  <linearGradient id="paint0_linear_8855_3695" x1="47.7976" y1="225.471" x2="274.019" y2="619.733" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00FFF0" />
                    <stop offset="1" stop-color="#FF004D" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="500" height="400" viewBox="0 0 665 574" fill="none" className="absolute opacity-50">
                <g filter="url(#filter0_f_8855_3696)">
                  <path d="M310.816 150.506L514.174 423.552L105.332 422.704L310.816 150.506Z" fill="url(#paint0_linear_8855_3696)" />
                </g>
                <defs>
                  <filter id="filter0_f_8855_3696" x="-44.6675" y="0.505859" width="708.842" height="573.046" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_8855_3696" />
                  </filter>
                  <linearGradient id="paint0_linear_8855_3696" x1="310.816" y1="150.506" x2="310.062" y2="514.003" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00FF85" />
                    <stop offset="1" stop-color="#00FF47" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-6xl sm:text-7xl md:text-8xl z-100 -ml-6 sm:-ml-8 md:-ml-10">
                <Image src={tabs[active].image} width={180} height={180} alt={"usecase"} className="sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] object-contain"></Image>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
