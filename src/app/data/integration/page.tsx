import Image from "next/image";

export default function DataIntegration() {
    return <div>
        <section className="container flex items-center mx-auto my-40">
            <div className="w-full md:w-6/12">
                <h1 className="text-7xl">Data Integration</h1>
                <span className="flex mt-10">
                    <p className="text-gray-400">
                        Data without integration is like fuel without an engine—full of potential but unable to create movement. We ensure your collected data seamlessly flows into your existing ecosystem, amplifying its value and impact.
                    </p>
                </span>
            </div>
            <div className="">
                <video controls={false} autoPlay muted playsInline loop className="w-full max-w-4xl" src={'https://res.cloudinary.com/thesameeric/video/upload/v1761660079/milsat/GettyImages-1226609402_fub96z.mp4'}></video>
            </div>
        </section>
        <section className="bg-[#01191D]">
            <div className="container flex w-full justify-between gap-x-10   items-center mx-auto py-40">
                <div className="w-5/12">
                    <h2 className="text-5xl">Database Ownership & Control</h2>
                    <span className="flex pt-10 pr-10">
                        <p>
                            We firmly believe that whoever owns the storage owns the data. That&apos;s why we prioritize integrating collected information directly into your internal databases. You maintain complete sovereignty over your data assets while we handle the technical complexities of standardization, formatting, and secure transfer. This approach ensures you're building long-term organizational intelligence, not creating dependencies on external platforms.
                        </p>
                    </span>
                </div>
                <div>
                    <Image height={458} width={600} alt="database" className="rounded-lg" src={'/owner.png'} />
                </div>
            </div>
        </section>
        <section className="container flex justify-between items-center mx-auto py-40">
            <div className="w-full md:w-5/12">
                <h2 className="text-5xl leading-15">Tool & Process Enhancement</h2>
                <span className="inline-block pt-10">
                    <p>
                        Your organization already uses specific tools—PowerBI for analytics, ArcGIS for mapping, CRMs for customer management, payment portals for transactions, impact reporting software for stakeholder communication. We don't ask you to change these. Instead, we build bridges that allow our collected data to flow naturally into these existing systems. This integration transforms static tools into dynamic, data-rich platforms that provide real-time insights and enable data-driven decision-making without disrupting established workflows.
                    </p>
                </span>
            </div>
            <div>
                <Image width={563} height={844} className="rounded-lg" src={"/tpe.png"} alt={"drone image"}></Image>
            </div>
        </section>
    </div>;
}