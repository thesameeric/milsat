import Image from "next/image";
import { WhyUs } from '../../../components/whyUs';
import { WavyGradientCanvas } from '../../../components/WavyGradientCanvas';

export default function FinanceSolutionPage() {
    return (
        <div className="min-h-screen bg-black">
            <section className="relative container min-h-[500px] md:min-h-[600px] lg:min-h-[700px] mx-auto flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Animated Canvas Background */}
                <div className="absolute inset-0 z-0">
                    <WavyGradientCanvas />
                </div>

                {/* Content */}
                <span className="relative z-10">
                    <p className="border border-[#fafafa] px-3 py-1 rounded-full text-sm">Banking & finance</p>
                </span>
                <div className="md:max-w-7/12 mt-5 relative z-10">
                    <h1 className="font-bold text-4xl md:text-7xl text-center">
                        Accurate data collection for KYC requirements
                    </h1>
                </div>
            </section>

            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Achieve AML Compliance
                    </h2>
                    <p className="">
                        Attain full anti-money laundering compliance, reduce fraud risks, and minimize bad loan possibilities by accurately verifying customer addresses anywhere in Nigeria with Milsat
                    </p>
                </div>
                <div>
                    <Image
                        src="/lincon.jpg"
                        alt="AML Compliance"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Validate Customer Database
                    </h2>
                    <p>
                        Improve internal customer data with new field geospatial attributes to develop a more comprehensive customer database and deliver relevant offerings precisely for your customers
                    </p>
                </div>
                <div>
                    <Image
                        src="/thumbprint.jpg"
                        alt="AML Compliance"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8 gap-8">
                <div className="md:max-w-5/12">
                    <h2 className="text-3xl sm:font-semibold md:font-normal md:text-5xl pb-8">
                        Expand Accurate Insights
                    </h2>
                    <p>
                        Mitigate the risks of inaccuracies with new and relevant data about your customer&apos;s location and their behaviour to build a framework that fosters unprecedented levels of reliable insights                    </p>
                </div>
                <div>
                    <Image
                        src="/user-data.jpg"
                        alt="AML Compliance"
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