import Image from "next/image";

export default function CustomersLogoSection() {
    const tabs = [
        {
            title: "Statistics Sierra Leone",
            value: "Statistics Sierra Leone",
            image: '/clients/sls.png',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 text-white"
                    style={{
                        background: '#01191D'
                    }}>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Census and Enumeration Area Declination</p>
                    <span className="inline-block pt-6 sm:pt-8 md:pt-10">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Country-wide deployment of custom geo app, algorithms and web tools for national census planning, settlement identification and full digital creation of enumeration area boundaries, building footprints and Point of Interest.
                        </p>
                    </span>
                </div>
            ),
        },
        {
            title: "National Population Commission",
            value: "National Population Commission",
            image: '/clients/npc.png',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 text-white"
                    style={{
                        background: '#01191D'
                    }}>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Enumeration Area Delineation and Baseline Mapping</p>
                    <span className="inline-block pt-6 sm:pt-8 md:pt-10">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Field technology customization and support for Nigeria&apos;s first digital nation-wide mapping of over 100 million geospatial datasets consisting of localities, buildings, roads and population estimate.
                        </p>
                    </span>
                </div>
            ),
        },
        {
            title: "Nigeria Postcode Service",
            value: "Nigeria Postcode Service",
            image: '/clients/nipost2.jpg',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 text-white"
                    style={{
                        background: '#01191D'
                    }}>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Nigeria's First Digital Postcode System</p>
                    <span className="inline-block pt-6 sm:pt-8 md:pt-10">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Providing technology and geospatial modelling support for the generation of 60million+ digital alphanumeric postcode system to support national addressing system, logistics and delivery precision.
                        </p>
                    </span>
                </div>
            ),
        },
        {
            title: "United Nations Development Program",
            value: "United Nations Development Program",
            image: '/clients/undp.png',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 text-white"
                    style={{
                        background: '#01191D'
                    }}>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Enumeration and Profiling of Artisanal Miners in Africa</p>
                    <span className="inline-block pt-6 sm:pt-8 md:pt-10">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Structured identification and enumeration of artisanal miners for a needs assessment, enabling health insurance, financial inclusion, access to equipment, and climate resilience through service partnerships.
                        </p>
                    </span>
                </div>
            ),
        },
        {
            title: "Sabi",
            value: "Sabi",
            image: '/clients/sabi.svg',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 text-white"
                    style={{
                        background: '#01191D'
                    }}>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Farmers and aggregators profiling for cocoa ESG traceability</p>
                    <span className="inline-block pt-6 sm:pt-8 md:pt-10">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Acquisition of verified field data on farms, farmers, aggregators, and aggregation methods, along with accurate ESG ratings, to understand the traceability of cocoa movement from farms to processing across the cocoa value chain.
                        </p>
                    </span>
                </div>
            ),
        }
    ];

    return (
        <section className="container mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 w-full">
            <div className="flex flex-wrap">
                {tabs.map((tab) => <div key={tab.title} className="max-w-[200px] mx-auto mb-5">
                    <Image width={100} height={200} src={tab.image} alt={tab.title} className="h-[80px] w-full grayscale object-contain" />
                </div>)}
            </div>
        </section>
    );
}