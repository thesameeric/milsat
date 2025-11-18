'use client'
import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useCollection } from "@/lib/sdk";

export type Testimonial = {
  message: string;
  name: string;
  position: string;
  avatar: string;
};

export default function TestimonialsSection({ autoplay }: {
  autoplay?: boolean;
}) {
  const testimonialCollection = useCollection("Testimonials");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const result = await testimonialCollection.list(1, 50);
        const mappedTestimonials = result.data.map((entry: any) => ({
          message: entry.message || "",
          name: entry.name || "",
          position: entry.position || "",
          avatar: entry.avatar?.url || "",
        }));
        setTestimonials(mappedTestimonials);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTestimonials();
  }, [testimonialCollection]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && testimonials.length > 0) {
      const interval = setInterval(handleNext, 60000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          Don&apos;t Just take our words for it;<br></br>
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mt-2">Our customers says it best</p>
        </h2>
        <div className="flex justify-center items-center py-12 sm:py-20">
          <div className="animate-pulse text-gray-400">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
        Don&apos;t Just take our words for it;<br></br>
        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mt-2">Our customers says it best</p>
      </h2>

      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto p-6 sm:p-8 md:p-12 mt-8 sm:mt-12 md:mt-20 relative">
        <div className="text-6xl mb-8 absolute top-0 left-0 sm:-left-[30px] opacity-50 sm:opacity-100">
          <Image width={50} height={65} src={'/quote.png'} alt={'Quote'} className="sm:w-[70px] sm:h-[90px]"></Image>
        </div>
        <div className="flex flex-col justify-between py-4 w-full">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="flex flex-col justify-center items-center w-full"
          >
            <motion.p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-center w-full break-words px-4 sm:px-0">
              {testimonials[active].message.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className=""
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <div className="text-center">
              <h3 className="dark:text-white text-base sm:text-lg font-semibold">
                {testimonials[active].name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                {testimonials[active].position}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
        {testimonials.map((x, i) => <div
          key={i}
          onClick={() => setActive(i)}
          className={cn('w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full cursor-pointer', active === i ? 'bg-white' : 'bg-white/30')}></div>
        )}
      </div>
    </section>
  );
}
