import Image from "next/image";

export default function DataIntegration() {
    return <div>
        <section className="container flex items-center mx-auto my-20">
            <div className="w-full md:w-6/12">
                <h1 className="text-7xl">Making Your Data an Asset</h1>
                <span className="flex mt-10">
                    <p className="text-gray-400">
                        In the modern economy, data is currency—but only if it can be shared securely and beneficially. We've built advanced frameworks that transform your data from a cost center into a revenue generator and impact multiplier.
                    </p>
                </span>
            </div>
            <div className="">
                <video controls={false} autoPlay muted playsInline loop className="w-full max-w-4xl" src={'https://res.cloudinary.com/thesameeric/video/upload/v1761973579/milsat/0_Abstract_Design_1280x720_r030bj.mp4'}></video>
            </div>
        </section>
        <section className="container flex justify-between items-center mx-auto pb-40">
            <div className="w-full md:w-5/12">
                <h2 className="text-5xl leading-15">Research Enablement</h2>
                <span className="inline-block pt-10">
                    <p>
                        Academic and commercial research thrives on quality data. We facilitate co-publications where your data contributes to groundbreaking studies, ensuring proper attribution and citation. Your datasets can train next-generation AI models specifically designed for African contexts, support baseline studies for impact measurement, or enable longitudinal research that wouldn't be possible without consistent, quality data. Each research application enhances your organization's reputation as a thought leader and data pioneer while generating licensing fees or collaboration opportunities.
                    </p>
                </span>
            </div>
            <div>
                <Image width={563} height={844} className="rounded-lg" src={"/enb.png"} alt={"drone image"}></Image>
            </div>
        </section>
    </div>;
}