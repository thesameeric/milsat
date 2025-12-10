'use client';
import { useTranslations } from 'next-intl';
import TalkToAnExpert from './TalkToAnExpert';
import Image from 'next/image';

export default function ReadyToStart() {
    const t = useTranslations('readyToStart');

    return (
        <div>
            <div className='container mx-auto my-12 md:px-40 lg:max-w-8/12'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-center'>Research that guides nations. Data that powers markets. Intelligence that drives impact</h2>
            </div>
            <div className='container mx-auto'>
                <div className='border border-[#343434] rounded-2xl'>
                    <section className="grid grid-cols-1 md:grid-cols-3 mx-auto text-white">
                        <StartFeature imageUrl={'/market-reserch.png'} title={t('marketResearch')} description={t('marketResearchDescription')} />
                        <StartFeature imageUrl={'/census-mapping.png'} title={t('govtResearch')} description={t('govtResearchDescription')} />
                        <StartFeature imageUrl={'/impact-research.png'} title={t('impactResearch')} description={t('impactResearchDescription')} />
                    </section>
                </div>
            </div>
            <div className='container mx-auto my-12 md:px-40'>
                <div className='flex justify-center'>
                    <TalkToAnExpert link={'/contact'} text={'Talk to an expert'} />
                </div>
            </div>
        </div>
    );
}

const StartFeature = ({ imageUrl, title, description }: { imageUrl: string; title: string; description: string }) => {
    return <div className="relative py-10 px-6 sm:py-16 sm:px-12 md:py-10 md:px-10 hover:bg-[#080808] cursor-pointer transition-all duration-200 group border-l border-[#343434] first:border-none">
        <div className='mb-5'>
            <Image width={300} height={300} className='w-full rounded-lg' src={imageUrl} alt={title} />
        </div>
        <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl mb-4 md:mb-6">
                {title}
            </h2>
            <p className="text-base mb-6 text-gray-400">
                {description}
            </p>
        </div>
    </div>
}