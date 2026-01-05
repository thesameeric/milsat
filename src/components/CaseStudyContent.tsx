
interface CaseStudyContentProps {
    title: string;
    description: string;
}

export default function CaseStudyContent({ title, description }: CaseStudyContentProps) {
    return (
        <div className="w-full overflow-hidden relative h-full py-12 sm:py-16 md:py-20 text-white">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</p>
            <span className="inline-block pt-6 sm:pt-8 md:pt-10">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {description}
                </p>
            </span>
        </div>
    );
}
