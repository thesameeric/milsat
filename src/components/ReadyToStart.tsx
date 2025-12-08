'use client';
import { ArrowRight, TagIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import TalkToAnExpert from './TalkToAnExpert';

export default function ReadyToStart() {
    const t = useTranslations('readyToStart');

    return (
        <div>
            <div className='container mx-auto my-12 md:px-40'>
                <h2 className='text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-6 text-center'>Research that guides nations. Data that powers markets. Intelligence that drives impact</h2>
            </div>
            <div className='border-y border-[#343434]'>
                <section className="grid grid-cols-1 md:grid-cols-3 mx-auto text-white">
                    <div className="relative py-10 px-6 sm:py-16 sm:px-12 md:py-10 md:px-10 hover:bg-[#080808] cursor-pointer transition-all duration-200 group">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                            {t('marketResearch')}
                        </h2>
                        <p className="text-base sm:text-lg mb-6 text-gray-400">
                            {t('marketResearchDescription')}
                        </p>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l border-[#343434] relative py-10 px-6 sm:py-16 sm:px-12 md:py-10 md:px-10 hover:bg-[#080808] cursor-pointer transition-all duration-200 group">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                            {t('govtResearch')}
                        </h2>
                        <p className="text-base sm:text-lg mb-6 text-gray-400">
                            {t('govtResearchDescription')}
                        </p>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l border-[#343434] relative py-10 px-6 sm:py-16 sm:px-12 md:py-10 md:px-10 hover:bg-[#080808] cursor-pointer transition-all duration-200 group">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                            {t('impactResearch')}
                        </h2>
                        <p className="text-base sm:text-lg mb-6 text-gray-400">
                            {t('impactResearchDescription')}
                        </p>
                    </div>
                </section>
            </div>
            <div className='container mx-auto my-12 md:px-40'>
                <div className='flex justify-center'>
                    <TalkToAnExpert link={'/contact'} text={'Talk to an expert'} />
                </div>
            </div>
        </div>
    );
}