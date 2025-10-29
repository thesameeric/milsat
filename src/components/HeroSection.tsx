'use client'
import WordFlipper from './wordFlippers';
import TalkToAnExpert from './TalkToAnExpert';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center mx-auto min-h-screen px-8 pt-32 pb-20 text-center overflow-hidden">
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
      <img src="/bg-img.png" className='absolute top-0 left-0 opacity-8' alt="" />
      <div
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-black/80"
      >

      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <h1 className="text-6xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
          The Africa Others<br /> Don&apos;t See
        </h1>
        <WordFlipper />
        <div className="flex gap-4 justify-center items-center flex-wrap mt-10">
          <Link
            href="/try"
            className="px-6 py-3 text-sm bg-white rounded-md text-slate-900 font-medium hover:underline hover:bg-gray-200 transition-colors"
          >
            See how it works
          </Link>
          <TalkToAnExpert link={'/contact'} />
        </div>
      </div>
    </section>
  );
}
