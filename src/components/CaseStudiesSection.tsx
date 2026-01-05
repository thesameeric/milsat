'use client';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { useCollection } from "@/lib/sdk";
import CaseStudyContent from "./CaseStudyContent";

type CaseStudy = {
  title: string;
  content: string;
  logo: string;
  project_owner: string;
  field_image: string;
};

export default function CaseStudiesSection({ autoplay = false }: { autoplay?: boolean }) {
  const caseStudiesCollection = useCollection("case_study");
  const [usecases, setUsecases] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        const result = await caseStudiesCollection.list(1, 50);
        const mappedCaseStudies = result.data.map((entry: any) => ({
          title: entry.title || "",
          content: entry.content || "",
          logo: entry.logo?.url || "",
          project_owner: entry.project_owner || "",
          field_image: entry.field_image?.url || "",
        }));
        // Only set usecases if we have valid data
        if (mappedCaseStudies.length > 0) {
          setUsecases(mappedCaseStudies);
        }
      } catch (err) {
        console.error("Error fetching case studies:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCaseStudies();
  }, [caseStudiesCollection]);

  const handleNext = () => {
    if (usecases.length === 0) return;
    setActive((prev) => (prev + 1) % usecases.length);
  };

  const handlePrev = () => {
    if (usecases.length === 0) return;
    setActive((prev) => (prev - 1 + usecases.length) % usecases.length);
  };

  useEffect(() => {
    if (autoplay && usecases.length > 0) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, usecases.length]);

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="md:max-w-5/12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12">
            Customers using our expertise to solve real problems
          </h2>
        </div>
        <div className="bg-[#150040] rounded-lg p-12 sm:p-16 md:p-20 flex justify-center items-center h-[400px]">
          <div className="animate-pulse text-gray-400">Loading case studies...</div>
        </div>
      </section>
    );
  }

  if (usecases.length === 0) {
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
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <CaseStudyContent title={usecases[active].title} description={usecases[active].content} logo={usecases[active].logo} project_owner={usecases[active].project_owner} />
            </motion.div>
          </div>
          <div className="flex justify-center">
            <div
              className="backdrop-blur-sm flex items-center justify-center bg-cover bg-center relative">
              <span className="z-100">
                {usecases[active]?.field_image && (
                  <Image
                    src={usecases[active].field_image}
                    width={180}
                    height={180}
                    alt={"usecase"}
                    className="w-[600px] overflow-hidden h-[400px] object-cover rounded-2xl"
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
