import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";

function truncateWords(text: string, wordLimit: number): string {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
}

export default function Publications() {
    const publications = [
        {
            title: "Participatory GIS Mapping for Sustainable Urban Development in Sub-Saharan African Cities",
            authors: ["Dr. Amara Okonkwo", "Prof. Kwame Mensah", "Dr. Fatima Hassan"],
            abstract: "This study examines the implementation of participatory Geographic Information Systems (PGIS) in five major Sub-Saharan African cities: Lagos, Nairobi, Accra, Dar es Salaam, and Kampala. Through community-based mapping initiatives involving over 15,000 residents, we demonstrate how local knowledge integration with formal GIS datasets can improve urban planning outcomes. Our findings reveal that PGIS approaches increase community engagement by 78% and lead to more equitable resource allocation in informal settlements. The research highlights challenges including digital literacy gaps, data quality concerns, and institutional resistance, while proposing frameworks for scalable implementation across diverse urban contexts.",
            researchArea: "Urban Planning & Community GIS",
            dateOfPublication: "2024-09-15"
        },
        {
            title: "Remote Sensing and Machine Learning for Agricultural Land Use Classification in the Sahel Region",
            authors: ["Dr. Ibrahim Diallo", "Dr. Sarah Ndlovu", "Prof. Jean-Baptiste Kamau"],
            abstract: "Climate change and population growth necessitate accurate agricultural monitoring systems across the Sahel. This paper presents a novel approach combining Sentinel-2 satellite imagery with deep learning algorithms to classify crop types and predict yields across 2.5 million hectares in Burkina Faso, Mali, and Niger. Our convolutional neural network achieved 92.3% accuracy in distinguishing between millet, sorghum, cowpea, and groundnut cultivation. The model successfully identified early drought stress indicators, enabling timely intervention strategies. We demonstrate that open-source remote sensing data, when coupled with ground-truth validation from mobile data collection, can provide cost-effective agricultural intelligence for smallholder farming communities.",
            researchArea: "Remote Sensing & Agricultural Monitoring",
            dateOfPublication: "2024-11-22"
        },
        {
            title: "Mobile Data Collection Technologies for Healthcare Facility Mapping in Rural East Africa",
            authors: ["Dr. Grace Wanjiru", "Dr. Moses Okello", "Dr. Aisha Mohammed", "Prof. Daniel Kibira"],
            abstract: "Healthcare accessibility remains a critical challenge in rural East Africa, with incomplete facility databases hindering service delivery planning. This research evaluates mobile data collection platforms (KoBoToolbox, ODK Collect, and Survey123) deployed across rural Kenya, Uganda, and Tanzania to map 3,847 healthcare facilities. Our comparative analysis reveals that offline-capable mobile solutions reduced data collection time by 65% compared to traditional paper-based methods, while improving spatial accuracy to within 5 meters. We documented facility characteristics including services offered, staff capacity, equipment availability, and patient volumes. The resulting geospatial database has been integrated into national Health Information Systems, enabling evidence-based resource allocation and emergency response planning.",
            researchArea: "Health GIS & Mobile Data Collection",
            dateOfPublication: "2025-01-10"
        },
        {
            title: "UAV-Based Photogrammetry for Infrastructure Development and Monitoring in West African Coastal Zones",
            authors: ["Dr. Kofi Asante", "Dr. Ngozi Eze", "Prof. Amadou Bah"],
            abstract: "Coastal erosion and infrastructure degradation threaten millions of residents in West African coastal cities. This study demonstrates the application of low-cost UAV technology for high-resolution mapping and temporal monitoring of coastal infrastructure in Accra, Lagos, and Dakar. Using Structure-from-Motion photogrammetry, we generated centimeter-level Digital Elevation Models covering 450 kilometers of coastline. Time-series analysis from 2022-2024 quantified erosion rates averaging 2.8 meters annually, with some areas experiencing up to 12 meters of retreat. Our methodology enables local governments to prioritize infrastructure investments and implement adaptive management strategies. We provide open-source workflows that can be replicated across similar contexts with minimal technical expertise.",
            researchArea: "Coastal GIS & UAV Remote Sensing",
            dateOfPublication: "2024-07-03"
        },
        {
            title: "Crowdsourced Mapping and Disaster Response: OpenStreetMap's Role in Southern African Cyclone Recovery",
            authors: ["Prof. Thabo Mthembu", "Dr. Lindiwe Khumalo", "Dr. Fernando Santos", "Dr. Precious Moyo"],
            abstract: "Tropical cyclones Idai (2019) and Freddy (2023) devastated Mozambique, Malawi, and Zimbabwe, exposing critical gaps in baseline geographic data. This research analyzes the humanitarian mapping response through OpenStreetMap, where 12,000 volunteers digitized 2.3 million buildings and 185,000 kilometers of roads. We assess data quality, volunteer coordination mechanisms, and integration with formal emergency response systems. Geospatial analysis reveals that areas with pre-existing OSM coverage received aid 40% faster than unmapped regions. Our findings emphasize the importance of proactive mapping before disasters strike and identify best practices for coordinating crowdsourced geodata during humanitarian crises. We propose frameworks for sustained community mapping initiatives linked to national disaster preparedness strategies.",
            researchArea: "Disaster Management & Humanitarian Mapping",
            dateOfPublication: "2024-10-28"
        },
        {
            title: "Geospatial Data Infrastructure Development and Policy Frameworks in Anglophone Africa",
            authors: ["Prof. Chiamaka Okoli", "Dr. David Mensah", "Dr. Elizabeth Mwangi"],
            abstract: "Effective governance requires accessible, standardized geospatial data infrastructure (SDI). This comparative policy analysis examines SDI implementation across eight Anglophone African nations: Nigeria, Kenya, South Africa, Ghana, Uganda, Tanzania, Zambia, and Rwanda. Through stakeholder interviews, document analysis, and technical assessments, we identify critical success factors including political commitment, inter-agency coordination, and capacity building. Countries with dedicated SDI legislation demonstrated 3x higher data sharing rates between government agencies. We document persistent challenges including fragmented institutional mandates, proprietary data silos, and insufficient funding. The research proposes evidence-based policy recommendations aligned with African Union Agenda 2063 objectives and the UN-GGIM framework for integrated geospatial information.",
            researchArea: "Geospatial Policy & Data Infrastructure",
            dateOfPublication: "2025-02-14"
        },
        {
            title: "Real-Time GPS Tracking and Predictive Analytics for Wildlife Anti-Poaching in Tanzanian National Parks",
            authors: ["Dr. Sadiq Juma", "Dr. Catherine Mollel", "Prof. Richard Hoare", "Dr. Anna Lyimo"],
            abstract: "Wildlife poaching threatens Africa's biodiversity and tourism economy. This research presents an integrated GIS platform combining real-time GPS collar data from 247 elephants and rhinos with patrol ranger tracking, environmental variables, and historical poaching incidents across Serengeti, Tarangire, and Ruaha National Parks. Machine learning algorithms predict high-risk poaching zones with 87% accuracy, enabling proactive ranger deployment. Our system reduced elephant poaching by 43% over 18 months through optimized patrol routing. Mobile data collection apps facilitate incident reporting, evidence documentation, and patrol monitoring. The platform's open architecture allows replication across East African conservation areas, demonstrating how geospatial technology can support evidence-based wildlife protection strategies.",
            researchArea: "Conservation GIS & Wildlife Tracking",
            dateOfPublication: "2024-12-05"
        },
        {
            title: "Blockchain-Enabled Land Registration Systems: Geospatial Technology for Tenure Security in Rwanda",
            authors: ["Dr. Jean-Paul Nsengimana", "Prof. Alice Mukamana", "Dr. Emmanuel Hategeka"],
            abstract: "Land tenure insecurity undermines agricultural investment and economic development across Africa. This study evaluates Rwanda's innovative integration of blockchain technology with traditional cadastral GIS systems to create tamper-proof land registries. Analysis of 1.2 million registered parcels demonstrates that blockchain-backed land certificates reduced registration disputes by 68% and increased women's land ownership documentation by 34%. High-accuracy GPS boundary surveys using mobile tablets ensure spatial precision, while blockchain immutability prevents fraudulent alterations. Survey data from 5,000 landholders reveals increased willingness to invest in land improvements and access credit using digital certificates as collateral. We propose a scalable model adaptable to diverse African legal and institutional contexts.",
            researchArea: "Land Administration & Cadastral Systems",
            dateOfPublication: "2024-08-19"
        }
    ];
    return <div className="container mx-auto my-20">
        <div>
            <ul className="md:max-w-8/12">
                {publications.map((publication, index) => <li className="border-dashed border-[#27272a] border-b py-10" key={index}>
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-x-3">
                            {publication.authors.map((author, i) => <p className="text-[14px]" key={i}>{author}</p>)}
                        </div>
                        <div className="flex items-center gap-x-2 text-sm font-semibold">
                            <ArrowDownCircle color="#27272a" />
                            Paper
                        </div>
                    </div>
                    <div>
                        <Link href={`publications/${index}`} className="inline-block text-2xl pb-15">{publication.title}</Link>
                    </div>
                    <div>
                        <p className="text-[18px] pb-10 leading-8 tracking-wider text-gray-400">{truncateWords(publication.abstract, 40)}</p>
                    </div>
                    <div className="flex gap-x-5">
                        <p>{publication.researchArea}</p>
                    </div>
                </li>)}
            </ul>
        </div>
    </div>
}