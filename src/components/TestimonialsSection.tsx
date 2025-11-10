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
      <section className="container mx-auto px-8 py-20">
        <h2 className="text-4xl md:text-5xl text-center mb-16 max-w-4xl mx-auto">
          Don&apos;t Just take our words for it;<br></br>
          <p className="text-gray-400">Our customers says it best</p>
        </h2>
        <div className="flex justify-center items-center py-20">
          <div className="animate-pulse text-gray-400">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-8 py-20">
      <h2 className="text-4xl md:text-5xl text-center mb-16 max-w-4xl mx-auto">
        Don&apos;t Just take our words for it;<br></br>
        <p className="text-gray-400">Our customers says it best</p>
      </h2>

      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto p-12 mt-20 relative">
        <div className="text-6xl mb-8 absolute top-0 -left-[30px]">
          <Image width={70} height={90} src={'/quote.png'} alt={'Quote'} ></Image>
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
            <motion.p className="text-xl leading-relaxed mb-8 text-center w-full break-words">
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
            <div>
              <h3 className="dark:text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {testimonials[active].position}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((x, i) => <div
          key={i}
          onClick={() => setActive(i)}
          className={cn('w-3 h-3 bg-white rounded-full cursor-pointer', active === i ? 'bg-white' : 'bg-white/30')}></div>
        )}
      </div>
    </section>
  );
}
