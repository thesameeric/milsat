import { WavyGradientCanvas } from "@/components/WavyGradientCanvas";
import { WhyUs } from "@/components/whyUs";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FeatureSection } from "@/components/FeatureSection";
import { CTA } from "@/components/CTA";

export default function MarketingSolutionPage() {
    const t = useTranslations('solutionPages.government');

    return (
        <div className="min-h-screen bg-black">
            <section className="relative container min-h-[500px] md:min-h-[600px] lg:min-h-[700px] mx-auto flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Animated Canvas Background */}
                <div className="absolute inset-0 z-0">
                    <WavyGradientCanvas />
                </div>

                {/* Content */}
                <span className="relative z-10">
                    <p className="border border-[#fafafa] px-3 py-1 rounded-full text-sm">{t('badge')}</p>
                </span>
                <div className="md:max-w-7/12 mt-5 relative z-10">
                    <h1 className="font-bold text-4xl md:text-7xl text-center">
                        {t('title')}
                    </h1>
                    <div className="mt-10">
                        <CTA />
                    </div>
                </div>
            </section>

            <FeatureSection
                title={t('censusTitle')}
                description={t('censusDescription')}
                imageSrc={"/gov-field.jpg"}
                imageAlt={"Customer Understanding"} />

            <FeatureSection
                title={t('postcodesTitle')}
                description={t('postcodesDescription')}
                imageSrc={"/postcode.jpg"}
                imageAlt={t('postcodesTitle')}
                imagePosition="left"
            />

            <FeatureSection
                title={t('propertyTaxationTitle')}
                description={t('propertyTaxationDescription')}
                imageSrc={"/taxation.png"}
                imageAlt={t('propertyTaxationTitle')}
            />

            <section className="py-20">
                <CTA />
            </section>

            <section className="px-4 sm:px-6 lg:px-8">
                <WhyUs />
            </section>
        </div>
    );
}
