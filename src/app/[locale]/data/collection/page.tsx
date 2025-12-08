'use client';
import Image from "next/image";
import TalkToAnExpert from "@/components/TalkToAnExpert";
import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/HeroSection';
import { FeatureSection } from '@/components/FeatureSection';

export default function DataCollection() {
    const t = useTranslations('dataPages.collection');
    const common = useTranslations('common');

    return <div>
        <HeroSection
            title={t('title')}
            subtitle={t('subtitle')}
            videoSrc="https://res.cloudinary.com/thesameeric/video/upload/v1761657727/milsat/GettyImages-1175032280_z6lfy5.mp4"
        >
            <TalkToAnExpert link="/contact" text={common('contactUs')} />
        </HeroSection>
        <section className="bg-[#01191D]">
            <FeatureSection
                title={t('fieldTaskTitle')}
                description={t('fieldTaskDescription')}
                imageSrc="/fencing.jpg"
                imageAlt="drone image"
                imageWidth={671}
                imageHeight={475}
                imagePosition="left"
            />
        </section>
        <FeatureSection
            title={t('realInsightTitle')}
            description={t('realInsightDescription')}
            imageSrc="/people.png"
            imageAlt="enumetation image"
            imageWidth={671}
            imageHeight={500}
            imagePosition="right"
        />

        <FeatureSection
            title={t('baselineTitle')}
            description={t('baselineDescription')}
            imageSrc="/drone.png"
            imageAlt="drone image"
            imageWidth={671}
            imageHeight={475}
            imagePosition="left"
        />
    </div>;
}
