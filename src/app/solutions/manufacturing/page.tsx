import Image from "next/image";
import { WhyUs } from '../../../components/whyUs';
import { WavyGradientCanvas } from '../../../components/WavyGradientCanvas';

export default function ManufacturingSolutionPage() {
    return (
        <div className="min-h-screen bg-black">
            <section className="relative container min-h-[500px] md:min-h-[600px] lg:min-h-[700px] mx-auto flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Animated Canvas Background */}
                <div className="absolute inset-0 z-0">
                    <WavyGradientCanvas />
                </div>

                {/* Content */}
                <span className="relative z-10">
                    <p className="border border-[#fafafa] px-3 py-1 rounded-full text-sm">Manufacturing</p>
                </span>
                <div className="md:max-w-7/12 mt-5 relative z-10">
                    <h1 className="font-bold text-4xl md:text-7xl text-center">
                        IoT data acquisition for machine optimization and production
                    </h1>
                </div>
            </section>

            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Eliminate Facility Downtimes
                    </h2>
                    <p className="">
                        Control machine operations, predict maintenance needs, and prevent breakdowns with real-time smart metering via IoT sensors that keep your production running smoothly
                    </p>
                </div>
                <div>
                    <Image
                        src="/facility-downtime.jpg"
                        alt="Eliminate Facility Downtimes"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Achieve Operational Cost-savings
                    </h2>
                    <p>
                        Monitor power, energy, and equipment health through IoT sensors and dashboards to identify cost-saving opportunities and optimize your manufacturing operations
                    </p>
                </div>
                <div>
                    <Image
                        src="/manufacturing-savings.jpg"
                        alt="Operational Cost-savings"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Live Asset Monitoring
                    </h2>
                    <p>
                        Track equipment remotely with a simple live dashboard, reduce site visits, and prevent surprise breakdowns with continuous monitoring and real-time alerts
                    </p>
                </div>
                <div>
                    <Image
                        src="/consumption.jpg"
                        alt="Live Asset Monitoring"
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
