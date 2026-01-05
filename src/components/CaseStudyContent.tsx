
import Image from "next/image";

interface CaseStudyContentProps {
    title: string;
    description: string;
    logo?: string;
    project_owner?: string;
}

export default function CaseStudyContent({ title, description, logo, project_owner }: CaseStudyContentProps) {
    return (
        <div className="w-full overflow-hidden relative h-full text-white">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</p>
            <span className="inline-block pt-6 sm:pt-8 md:pt-10">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {description}
                </p>
            </span>
            <div className="flex items-center gap-4 mt-10">
                {logo && <Image src={logo} width={180} height={180} className="w-[50px] h-[50px] object-contain" alt={"usecase"} />}
                {project_owner && <p className="text-gray-500">{project_owner}</p>}
            </div>
        </div>
    );
}
