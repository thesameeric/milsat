'use client'
import WordFlipper from './wordFlippers';
import TalkToAnExpert from './TalkToAnExpert';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center mx-auto min-h-screen px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 text-center overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mov" type="video/mp4" />
      </video> */}
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img src="/bg-img.png" className='absolute top-0 left-0 opacity-8 w-full h-full object-cover' alt="" />
      <div
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-black/80"
      >

      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 max-w-5xl mx-auto">
          The Africa Others<br /> Don&apos;t See
        </h1>
        <WordFlipper />
        <div className="flex gap-3 sm:gap-4 justify-center items-center flex-wrap mt-8 sm:mt-10">
          <Link
            href="/try"
            className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base bg-white rounded-md text-slate-900 font-medium hover:underline hover:bg-gray-200 transition-colors"
          >
            See how it works
          </Link>
          <TalkToAnExpert link={'/contact'} />
        </div>
      </div>
    </section>
  );
}
