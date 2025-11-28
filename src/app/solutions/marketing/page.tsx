import Image from "next/image";
import { WhyUs } from '../../../components/whyUs';
import { WavyGradientCanvas } from '../../../components/WavyGradientCanvas';

export default function MarketingSolutionPage() {
    return (
        <div className="min-h-screen bg-black">
            <section className="relative container min-h-[500px] md:min-h-[600px] lg:min-h-[700px] mx-auto flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Animated Canvas Background */}
                <div className="absolute inset-0 z-0">
                    <WavyGradientCanvas />
                </div>

                {/* Content */}
                <span className="relative z-10">
                    <p className="border border-[#fafafa] px-3 py-1 rounded-full text-sm">Marketing</p>
                </span>
                <div className="md:max-w-7/12 mt-5 relative z-10">
                    <h1 className="font-bold text-4xl md:text-7xl text-center">
                        Location intelligence for sales and marketing strategies
                    </h1>
                </div>
            </section>

            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Customer Understanding
                    </h2>
                    <p className="">
                        Gather qualitative mobility data around Points-of-Interest to improve marketing ROI and enhance customer insights for more effective campaigns
                    </p>
                </div>
                <div>
                    <Image
                        src="/customer-understanding.jpg"
                        alt="Customer Understanding"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Sales Territory Identification
                    </h2>
                    <p>
                        Use location intelligence to determine current sales zones, identify capturable markets, and optimize resource allocation for customer acquisition
                    </p>
                </div>
                <div>
                    <Image
                        src="/sales-team.jpg"
                        alt="Sales Territory Identification"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Optimize Marketing ROI
                    </h2>
                    <p>
                        Leverage location-intelligent mobile and web applications to gather all your business data in one place and make data-driven marketing decisions that deliver results
                    </p>
                </div>
                <div>
                    <Image
                        src="/roi.jpg"
                        alt="Marketing ROI Optimization"
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
