import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function DataCollection() {
    return <div>
        <section className="container flex items-center mx-auto my-40">
            <div className="w-full md:w-6/12">
                <h1 className="text-7xl">Data Collection</h1>
                <span className="flex mt-10">
                    <p className="text-gray-400">
                        We turn every corner of Africa into actionable intelligence.
                        From Lagos traffic patterns to Nairobi agricultural yields—we capture what others miss
                    </p>
                </span>
                <span className="flex pt-10">
                    <Link className="border flex items-center px-6 py-3 text-sm group" href={'/contact'}>
                        Talk to an expert
                        <ArrowRight className="h-5 w-5 ml-3 transition-transform group-hover:translate-x-1 group-hover:-rotate-12" />
                    </Link>
                </span>
            </div>
            <div className="">
                <video controls={false} autoPlay muted playsInline loop className="w-full max-w-4xl" src={'https://res.cloudinary.com/thesameeric/video/upload/v1761657727/milsat/GettyImages-1175032280_z6lfy5.mp4'}></video>
            </div>
        </section>
        <section className="bg-[#01191D]">
            <div className="container mx-auto py-40">
                <h2 className="text-5xl">How we do it</h2>
                <span className="flex pt-10 md:w-6/12">
                    <p>
                        Our automated data collection framework seamlessly orchestrates human intelligence networks, IoT sensors, drone mapping, and satellite feeds into unified, real-time streams. Instead of waiting months for outdated reports, businesses get continuous, verified intelligence from every corner of the continent.
                    </p>
                </span>
            </div>
        </section>
        <section className="container flex justify-between items-center mx-auto py-40">
            <div className="w-full md:w-5/12">
                <h2 className="text-5xl leading-15">Aerial Intelligence Where Roads End</h2>
                <span className="inline-block pt-10">
                    <p>
                        When terrain becomes impassable and infrastructure doesn&apos;t exist, our drones take flight. From mapping flood patterns across remote wetlands to surveying agricultural yields in mountainous regions, our aerial fleet captures high-resolution intelligence from Africa&apos;s most challenging environments.
                    </p>
                </span>
            </div>
            <div>
                <Image width={671} height={475} src={"/drone.png"} alt={"drone image"}></Image>
            </div>
        </section>
        <section className="container mx-auto">
            <h2 className="text-5xl">
                Real Insight from Real people, in Real Time
            </h2>
            <div className="pt-10">
                <Image src={"/people.png"} width={1000} height={574} alt={""} className="w-full h-auto rounded-lg"></Image>
            </div>
            <div className="md:w-6/12">
                <p className="pt-10">
                    These aren't just enumerators, they're local intelligence agents who understand cultural nuances, speak native languages, and build trust where outsiders cannot. When you need data from places that don't appear on most maps, our people are already there.
                </p>
            </div>
        </section>
    </div>;
}