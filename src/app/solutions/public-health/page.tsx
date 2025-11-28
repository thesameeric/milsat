import Image from "next/image";
import { WhyUs } from '../../../components/whyUs';
import { WavyGradientCanvas } from '../../../components/WavyGradientCanvas';

export default function PublicHealthSolutionPage() {
    return (
        <div className="min-h-screen bg-black">
            <section className="relative container min-h-[500px] md:min-h-[600px] lg:min-h-[700px] mx-auto flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Animated Canvas Background */}
                <div className="absolute inset-0 z-0">
                    <WavyGradientCanvas />
                </div>

                {/* Content */}
                <span className="relative z-10">
                    <p className="border border-[#fafafa] px-3 py-1 rounded-full text-sm">Public Health</p>
                </span>
                <div className="md:max-w-7/12 mt-5 relative z-10">
                    <h1 className="font-bold text-4xl md:text-7xl text-center">
                        Spatial data acquisition and analysis for micro-planning
                    </h1>
                </div>
            </section>

            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Identify Target Population
                    </h2>
                    <p className="">
                        Collect geospatial data on population profiles to deliver relief and develop sustainable public health frameworks that reach communities in need
                    </p>
                </div>
                <div>
                    <Image
                        src="/crowd.jpg"
                        alt="Target Population Identification"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Strengthen Intervention Planning
                    </h2>
                    <p>
                        Understand geographic profiles of target communities and collect accessibility and health center data to design effective intervention strategies
                    </p>
                </div>
                <div>
                    <Image
                        src="/health-planning.jpg"
                        alt="Intervention Planning"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Develop Intervention Micro-plan
                    </h2>
                    <p>
                        Create comprehensive maps with population and healthcare facility information to ensure vaccines reach underserved areas and maximize immunization impact
                    </p>
                </div>
                <div>
                    <Image
                        src="/map-hos.jpg"
                        alt="Intervention Micro-planning"
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
