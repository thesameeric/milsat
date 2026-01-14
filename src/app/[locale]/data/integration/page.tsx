'use client';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { FeatureSection } from '@/components/FeatureSection';
import { HeroSection } from '@/components/HeroSection';
import { CTA } from "@/components/CTA";

export default function DataIntegration() {
    const t = useTranslations('dataPages.integration');

    return <div>
        <HeroSection
            title={t('title')}
            subtitle={t('subtitle')}
            videoSrc="https://res.cloudinary.com/thesameeric/video/upload/v1761660079/milsat/GettyImages-1226609402_fub96z.mp4"
        >
            <div className="mt-10">
                <CTA />
            </div>
        </HeroSection>
        <section className="bg-[#01191D]">
            <FeatureSection
                title={t('ownershipTitle')}
                description={t('ownershipDescription')}
                imageSrc={"/owner.png"}
                imageAlt={t('ownershipTitle')} />
        </section>
        <FeatureSection
            title={t('toolsTitle')}
            description={t('toolsDescription')}
            imageSrc="/laptop-update.jpg"
            imageAlt="tool enhancement"
            imagePosition="left"
        />
        <FeatureSection
            title={t('geographicAtt')}
            description={t('geographicAttDescription')}
            imageSrc="/geoattr.jpg"
            imageAlt="tool enhancement"
            imageClassName="w-[550px] h-[400px]"
            className="md:pt-0 md:pb-20"
        />
    </div>;
}
