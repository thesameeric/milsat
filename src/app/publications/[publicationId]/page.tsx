import { Button } from "@/components/ui/button";
import dayjs from 'dayjs';

export default function PublicationPage() {
    const pub = {
        title: "Participatory GIS Mapping for Sustainable Urban Development in Sub-Saharan African Cities",
        authors: ["Dr. Amara Okonkwo", "Prof. Kwame Mensah", "Dr. Fatima Hassan"],
        abstract: "This study examines the implementation of participatory Geographic Information Systems (PGIS) in five major Sub-Saharan African cities: Lagos, Nairobi, Accra, Dar es Salaam, and Kampala. Through community-based mapping initiatives involving over 15,000 residents, we demonstrate how local knowledge integration with formal GIS datasets can improve urban planning outcomes. Our findings reveal that PGIS approaches increase community engagement by 78% and lead to more equitable resource allocation in informal settlements. The research highlights challenges including digital literacy gaps, data quality concerns, and institutional resistance, while proposing frameworks for scalable implementation across diverse urban contexts.",
        researchArea: "Urban Planning & Community GIS",
        dateOfPublication: "2024-09-15"
    };

    return <div className="container mx-auto my-20">
        <section>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl text-center">{pub.title}</h1>
                <span className="flex pt-10 text-sm text-gray-300">
                    {pub.authors.map((name, i) => <p key={i}>{name}</p>)}
                </span>
            </div>

        </section>
        <section className="mt-10">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-x-10">
                <div className="md:w-8/12">
                    <h2 className="mb-10 ">Abstract</h2>
                    <span>
                        <p className="text-gray-200 tracking-wider">
                            {pub.abstract}
                        </p>
                    </span>
                </div>
                <div>
                    <div className="flex items-center justify-center flex-col">
                        <Button className="cursor-pointer border hover:text-gray-400">
                            Download Paper
                        </Button>
                        <span>
                            <p className="p-5">{dayjs(pub.dateOfPublication).format('MMMM DD, YYYY')}</p>
                        </span>
                    </div>
                </div>
            </div>

        </section>
    </div>
}