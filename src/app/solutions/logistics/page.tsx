import Image from "next/image";
import { WhyUs } from '../../../components/whyUs';
import { WavyGradientCanvas } from '../../../components/WavyGradientCanvas';

export default function LogisticsSolutionPage() {
    return (
        <div className="min-h-screen bg-black">
            <section className="relative container min-h-[500px] md:min-h-[600px] lg:min-h-[700px] mx-auto flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Animated Canvas Background */}
                <div className="absolute inset-0 z-0">
                    <WavyGradientCanvas />
                </div>

                {/* Content */}
                <span className="relative z-10">
                    <p className="border border-[#fafafa] px-3 py-1 rounded-full text-sm">Logistics & Delivery</p>
                </span>
                <div className="md:max-w-7/12 mt-5 relative z-10">
                    <h1 className="font-bold text-4xl md:text-7xl text-center">
                        Location intelligent solutions for optimized delivery
                    </h1>
                </div>
            </section>

            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Location Intelligence
                    </h2>
                    <p className="">
                        Identify your high-volume customer base and optimize fleet movement and supply chain with advanced location intelligence technology that puts data at the center of your operations
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
                        Delivery Timeliness Enhancement
                    </h2>
                    <p>
                        Combine location data with internal fleet data to optimize delivery routes and understand customer groupings, saving valuable delivery time and improving customer satisfaction
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
                        Fleet Control Improvement
                    </h2>
                    <p>
                        Monitor fleet security and compliance with geofences around warehouses and delivery hubs. Leverage geospatial models and RFID technology for complete visibility and control
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
