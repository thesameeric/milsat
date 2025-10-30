import { parseEditorJS, extractHeaders } from "@/lib/editorjs-parser"
import TableOfContents from "@/components/TableOfContents"
import './blog.scss';

export default function BlogPost() {
    const post = {
        "time": 1698667200000,
        "blocks": [
            {
                "id": "header-1",
                "type": "header",
                "data": {
                    "text": "Transforming African Communities Through GIS and Data Collection",
                    "level": 1
                }
            },
            {
                "id": "paragraph-1",
                "type": "paragraph",
                "data": {
                    "text": "Geographic Information Systems (GIS) and modern data collection methods are revolutionizing how African nations approach development, conservation, and urban planning. From the bustling cities of Lagos to the remote villages of the Sahel, technology is empowering communities to map their world and make data-driven decisions."
                }
            },
            {
                "id": "image-1",
                "type": "image",
                "data": {
                    "file": {
                        "url": "https://images.unsplash.com/photo-1588702547919-26089e690ecc"
                    },
                    "caption": "Satellite view of African urban development",
                    "withBorder": false,
                    "stretched": false,
                    "withBackground": false
                }
            },
            {
                "id": "header-2",
                "type": "header",
                "data": {
                    "text": "The Rise of Mobile Data Collection",
                    "level": 2
                }
            },
            {
                "id": "paragraph-2",
                "type": "paragraph",
                "data": {
                    "text": "Mobile technology has democratized data collection across the continent. Tools like KoBoToolbox, ODK, and Survey123 enable field workers to collect accurate geospatial data even in areas with limited connectivity. This has proven invaluable for:"
                }
            },
            {
                "id": "list-1",
                "type": "list",
                "data": {
                    "style": "unordered",
                    "items": [
                        "Healthcare facility mapping and service delivery tracking",
                        "Agricultural land use surveys and crop monitoring",
                        "Infrastructure assessments for water and sanitation",
                        "Wildlife conservation and anti-poaching efforts",
                        "Electoral boundary demarcation and voter registration"
                    ]
                }
            },
            {
                "id": "header-3",
                "type": "header",
                "data": {
                    "text": "Community Mapping Initiatives",
                    "level": 2
                }
            },
            {
                "id": "paragraph-3",
                "type": "paragraph",
                "data": {
                    "text": "Participatory mapping projects are empowering local communities to document their own environments. In Nairobi's informal settlements, residents have mapped over 100,000 structures using smartphones and GPS devices, creating detailed datasets that inform urban planning decisions."
                }
            },
            {
                "id": "quote-1",
                "type": "quote",
                "data": {
                    "text": "When communities control their own data, they control their own narrative. GIS technology gives us the power to tell our stories with precision and authority.",
                    "caption": "Dr. Chiamaka Eze, Geospatial Researcher",
                    "alignment": "left"
                }
            },
            {
                "id": "header-4",
                "type": "header",
                "data": {
                    "text": "Drone Technology and Remote Sensing",
                    "level": 2
                }
            },
            {
                "id": "paragraph-4",
                "type": "paragraph",
                "data": {
                    "text": "Unmanned Aerial Vehicles (UAVs) are transforming how we collect spatial data across Africa. Drones equipped with high-resolution cameras and multispectral sensors can:"
                }
            },
            {
                "id": "list-2",
                "type": "list",
                "data": {
                    "style": "ordered",
                    "items": [
                        "Survey large agricultural areas in hours instead of weeks",
                        "Create detailed 3D models of terrain for infrastructure planning",
                        "Monitor environmental changes and deforestation",
                        "Assess disaster damage for rapid emergency response",
                        "Document cultural heritage sites for preservation"
                    ]
                }
            },
            {
                "id": "image-2",
                "type": "image",
                "data": {
                    "file": {
                        "url": "https://images.unsplash.com/photo-1473968512647-3e447244af8f"
                    },
                    "caption": "Drone-based mapping in rural Africa",
                    "withBorder": true,
                    "stretched": false,
                    "withBackground": false
                }
            },
            {
                "id": "header-5",
                "type": "header",
                "data": {
                    "text": "Challenges and Opportunities",
                    "level": 2
                }
            },
            {
                "id": "paragraph-5",
                "type": "paragraph",
                "data": {
                    "text": "Despite remarkable progress, challenges remain. Limited internet connectivity, lack of trained personnel, and inadequate funding continue to hinder widespread GIS adoption. However, innovative solutions are emerging:"
                }
            },
            {
                "id": "table-1",
                "type": "table",
                "data": {
                    "withHeadings": true,
                    "content": [
                        ["Challenge", "Solution", "Impact"],
                        ["Limited connectivity", "Offline-first mobile apps", "Data collection in remote areas"],
                        ["Skills gap", "University GIS programs & online training", "Growing workforce capacity"],
                        ["Data silos", "Open data platforms & APIs", "Improved collaboration"],
                        ["Hardware costs", "Smartphone-based solutions", "Reduced barriers to entry"]
                    ]
                }
            },
            {
                "id": "header-6",
                "type": "header",
                "data": {
                    "text": "The Road Ahead",
                    "level": 2
                }
            },
            {
                "id": "paragraph-6",
                "type": "paragraph",
                "data": {
                    "text": "As Africa continues to embrace digital transformation, GIS and spatial data will play an increasingly critical role in achieving sustainable development goals. From smart cities to precision agriculture, the applications are limitless. The key to success lies in ensuring that technology serves the needs of local communities and that data sovereignty remains in African hands."
                }
            },
            {
                "id": "delimiter-1",
                "type": "delimiter",
                "data": {}
            },
            {
                "id": "paragraph-7",
                "type": "paragraph",
                "data": {
                    "text": "<b>About the Author:</b> Amara Okonkwo is a geospatial analyst specializing in African urban development and community mapping initiatives. She has worked with organizations across 15 African countries to implement participatory GIS projects."
                }
            }
        ],
        "version": "2.28.0"
    }
    const headers = extractHeaders(post);

    return <div className="container mx-auto py-20">
        <div className="blog-layout">
            <aside className="toc-sidebar">
                <TableOfContents headers={headers} />
            </aside>
            <article className="blog_post">
                <div dangerouslySetInnerHTML={{ __html: parseEditorJS(post) }}>
                </div>
            </article>
        </div>
    </div>
}