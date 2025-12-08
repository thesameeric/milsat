'use client'
import { useEffect, useState } from 'react';
import WordFlipper from './wordFlippers';
import TalkToAnExpert from './TalkToAnExpert';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function LandingPageHero() {
    const t = useTranslations('hero');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center mx-auto min-h-[600px] sm:min-h-[700px] md:min-h-screen px-4 sm:px-6 md:px-8 pt-24 sm:pt-32 md:pt-32 pb-16 sm:pb-20 text-center overflow-hidden">
            {/* Background Image Layer - Mobile (lower opacity) with parallax */}
            <div
                className='absolute top-0 left-0 w-full h-full -z-20 md:hidden'
                style={{
                    backgroundImage: 'url(/bg-img.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.5,
                    transform: `translateY(${scrollY * 0.5}px)`,
                    willChange: 'transform'
                }}
            />

            {/* Background Image Layer - Desktop (higher opacity) with parallax */}
            <div
                className='absolute top-0 left-0 w-full h-full -z-20 hidden md:block'
                style={{
                    backgroundImage: 'url(/bg-img.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.1,
                    transform: `translateY(${scrollY * 0.5}px)`,
                    willChange: 'transform'
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 sm:bg-black/50 md:bg-black/30 -z-10"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 max-w-5xl mx-auto">
                    {t('title').split(' Don').map((part, i) => i === 0 ? part : <><br key={i} /> Don{part}</>)}
                </h1>
                <WordFlipper />
                <div className="flex gap-3 sm:gap-4 justify-center items-center flex-wrap mt-8 sm:mt-10">
                    <Link
                        href="/try"
                        className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base bg-white rounded-md text-slate-900 font-medium hover:underline hover:bg-gray-200 transition-colors"
                    >
                        {t('seeHowItWorks')}
                    </Link>
                    <TalkToAnExpert link={'/contact'} text={t('talkToExpert')} />
                </div>
            </div>
        </section>
    );
}
