'use client';
import { useTranslations } from 'next-intl';
import { FeatureSection } from '@/components/FeatureSection';
import { HeroSection } from '@/components/HeroSection';
import { CTA } from "@/components/CTA";

export default function DataIntelligence() {
    const t = useTranslations('dataPages.intelligence');

    return <div>
        <HeroSection
            title={t('title')}
            subtitle={t('subtitle')}
            videoSrc="https://res.cloudinary.com/thesameeric/video/upload/v1761973579/milsat/0_Abstract_Design_1280x720_r030bj.mp4"
            className="my-20"
        >
            <div className="mt-10">
                <CTA />
            </div>
        </HeroSection>
        <FeatureSection
            title={t('dynamicDashboardTitle')}
            description={t('dynamicDashboardDescription')}
            imageSrc="/en-dashboard.png"
            imageAlt="research enablement"
            imageWidth={563}
            imageHeight={844}
            className="pt-0 md:pt-0 md:pb-0"
        />
        <FeatureSection
            title={t('aiTitle')}
            description={t('aiDescription')}
            imageSrc="/aitotext.jpg"
            imageAlt="tool enhancement"
            imagePosition="left"
        />
        <FeatureSection
            title={t('impactTitle')}
            description={t('impactDescription')}
            imageSrc="/impact.png"
            imageAlt="tool enhancement"
            className="md:pt-0"
        />
        <FeatureSection
            title={t('decisionTitle')}
            description={t('decisionDescription')}
            imageSrc="/report.jpg"
            imageAlt="tool enhancement"
            imagePosition="left"
            className="md:pt-0"
        />
    </div>
}