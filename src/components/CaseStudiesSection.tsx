'use client';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Image from 'next/image';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export default function CaseStudiesSection({ usecases, autoplay = false }: { usecases: any[]; autoplay?: boolean }) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % usecases.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + usecases.length) % usecases.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <section className="container mx-auto px-8 py-20">
      <h2 className="text-4xl md:text-5xl mb-12">
        Case Studies
      </h2>

      <div className="bg-[#150040] rounded-lg p-20 relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div>
              <div className="flex gap-4 pt-12 md:pt-0 mb-10">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                >
                  <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                >
                  <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                </button>
              </div>
            </div>
            <motion.div>
              <p className="text-xl mb-8 leading-relaxed">
                {usecases[active].description}
              </p>
              <div className="grid grid-cols-3 gap-8 mb-15">
                <div>
                  <div className="text-4xl font-bold mb-1">5K+</div>
                  <div className="text-sm text-gray-200">Field Agents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">50K+</div>
                  <div className="text-sm text-gray-200">Polling Units</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm text-gray-200">Accuracy</div>
                </div>
              </div>
              <a href="#" className="bg-white text-sm text-slate-900 px-6 py-2 rounded-lg inline-block font-medium hover:bg-white/70 transition-colors">
                View Case Study
              </a>
            </motion.div>
          </div>
          <div className="flex justify-center">
            <div
              className="w-[200px] h-[200px] rounded-full backdrop-blur-sm flex items-center justify-center bg-cover bg-center relative">
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
              <span className="text-8xl z-100 -ml-10">
                <Image src={usecases[active].image} width={250} height={250} alt={"usecase"}></Image>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
