import { WavyGradientCanvas } from "@/components/WavyGradientCanvas";
import { WhyUs } from "@/components/whyUs";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CTA } from "@/components/CTA";

export default function LogisticsSolutionPage() {
    const t = useTranslations('solutionPages.logistics');

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

            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        {t('locationTitle')}
                    </h2>
                    <p className="">
                        {t('locationDescription')}
                    </p>
                </div>
                <div>
                    <Image
                        src="/map.jpg"
                        alt="Location Intelligence"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        {t('timelinessTitle')}
                    </h2>
                    <p>
                        {t('timelinessDescription')}
                    </p>
                </div>
                <div>
                    <Image
                        src="/ontime.jpg"
                        alt="Delivery Timeliness"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        {t('fleetTitle')}
                    </h2>
                    <p>
                        {t('fleetDescription')}
                    </p>
                </div>
                <div>
                    <Image
                        src="/fleet.jpg"
                        alt="Fleet Control"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="px-4 sm:px-6 lg:px-8">
                <WhyUs />
            </section>
        </div>
    );
}
