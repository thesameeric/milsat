import { cn } from "@/lib/utils";
import {
    IconMoneybag,
    IconSpeakerphone,
    IconEaseInOut,
    IconShieldCheck,
    IconClock24,
    IconTargetArrow,
} from "@tabler/icons-react";

export function WhyUs() {
    const features = [
        {
            title: "We hear you",
            description:
                "Location intelligent mobile and web applications to gather all your business data in one place",
            icon: <IconSpeakerphone />,
        },
        {
            title: "Expert technical support",
            description:
                "Comprehensive technical support from industry experts, dedicated to resolving your issues promptly and efficiently.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Clear pricing, no hidden fees",
            description:
                "Transparent pricing with no surprises. Know exactly what you're paying for upfront.",
            icon: <IconMoneybag />,
        },
        {
            title: "Proven reliability and security",
            description:
                "Enterprise-grade security standards ensuring your data is protected with advanced encryption and compliance certifications.",
            icon: <IconShieldCheck />,
        },
        {
            title: "Rapid deployment and scalability",
            description:
                "Get started quickly with our streamlined onboarding process and scale effortlessly as your business grows.",
            icon: <IconClock24 />,
        },
        {
            title: "Industry-specific solutions",
            description:
                "Tailored geospatial solutions designed specifically for your industry needs, delivering precise and actionable insights.",
            icon: <IconTargetArrow />,
        },
    ];
    return (
        <div className="container mx-auto">
            <h2 className="font-normal text-3xl md:text-5xl py-3 md:py-10">Why choose us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>

        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l border-neutral-800",
                index < 4 && "lg:border-b border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-purple-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
