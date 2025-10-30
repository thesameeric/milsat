import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';

const blogPosts = [
    {
        image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc",
        title: "Mapping Africa's Urban Growth with GIS Technology",
        description: "Exploring how Geographic Information Systems are being used to track rapid urbanization across African cities. Learn about satellite imagery, spatial analysis, and planning tools helping to manage sustainable development.",
        author: "Amara Okonkwo",
        authorImage: "https://i.pravatar.cc/150?img=45",
        createdAt: "2025-10-15T09:30:00Z"
    },
    {
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
        title: "Community-Based Data Collection in Rural Kenya",
        description: "Discover how mobile data collection tools are empowering local communities to map their own resources, from water sources to healthcare facilities. A case study on participatory GIS in East Africa.",
        author: "James Mwangi",
        authorImage: "https://i.pravatar.cc/150?img=12",
        createdAt: "2025-10-22T14:20:00Z"
    },
    {
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
        title: "Using Drone Technology for Agricultural Mapping in West Africa",
        description: "How UAVs and remote sensing are revolutionizing precision agriculture across the Sahel region. From crop health monitoring to land tenure documentation, drones are transforming data collection.",
        author: "Fatima Diallo",
        authorImage: "https://i.pravatar.cc/150?img=32",
        createdAt: "2025-09-30T11:45:00Z"
    },
    {
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
        title: "OpenStreetMap and Disaster Response in Southern Africa",
        description: "The critical role of crowd-sourced mapping during floods and cyclones. Learn how volunteers and humanitarian organizations use OSM data to coordinate relief efforts and build resilience.",
        author: "Thabo Ndlovu",
        authorImage: "https://i.pravatar.cc/150?img=51",
        createdAt: "2025-10-28T08:15:00Z"
    },
    {
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
        title: "Building Africa's Geospatial Data Infrastructure",
        description: "An overview of continental initiatives to standardize and democratize access to geographic data. From the African Union's Agenda 2063 to national SDI implementations, discover the future of spatial data.",
        author: "Dr. Chiamaka Eze",
        authorImage: "https://i.pravatar.cc/150?img=28",
        createdAt: "2025-10-05T16:00:00Z"
    },
    {
        image: "https://images.unsplash.com/photo-1577401239170-897942555fb3",
        title: "Mobile GIS Solutions for Wildlife Conservation in Tanzania",
        description: "Tracking endangered species and combating poaching using field data collection apps and real-time GPS monitoring. A look at technology protecting Africa's biodiversity.",
        author: "Sadiq Juma",
        authorImage: "https://i.pravatar.cc/150?img=59",
        createdAt: "2025-10-18T13:30:00Z"
    }
];

export default function Blog() {
    return <div className='container mx-auto'>
        <div>
            <h2 className='py-10 uppercase tracking-widest text-sm text-gray-400'>Latest Articles</h2>
        </div>
        <ul>
            {blogPosts.map((post, index) => <li className='flex items-center justify-between py-10 border-dashed border-[#27272a] border-b last:border-b-0' key={index}>
                <div className='w-full md:w-5/12'>
                    <span className='flex items-center gap-x-5 text-sm pb-3'>
                        <p className='text-sm text-gray-300 uppercase tracking-widest'>{dayjs(post.createdAt).format('MMMM DD, YYYY')}</p>
                        <p className='text text-[#08C4DE] hover:underline'>Gis</p>
                    </span>
                    <Link className='inline-block font-semibold hover:text-[#08C4DE] hover:underline text-2xl pb-5' href={`/blog/${index}`}>{post.title}</Link>
                    <span>
                        <p className='text-[16px] pb-5 text-gray-400'>{post.description}</p>
                    </span>
                    <span className='flex items-center'>
                        <Image src={post.authorImage} width={30} height={30} alt={post.authorImage} className='rounded-full' />
                        <p className='font-semibold text-[16px] pl-3'>{post.author}</p>
                    </span>
                </div>
                <div>
                    <Image objectFit='cover' src={post.image} alt={post.title} width={450} height={300} className='rounded-lg' />
                </div>
            </li>)}
        </ul>
        <div></div>
    </div>
}