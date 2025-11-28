import { ArrowRight } from "lucide-react";
import { Link } from '@/i18n/routing';

export default function TalkToAnExpert({ link, text = 'Talk to an expert' }: { link: string; text?: string }) {
    return <Link className="border rounded-md flex items-center px-6 py-3 text-sm group" href={link}>
        {text}
        <ArrowRight className="h-5 w-5 ml-3 transition-transform group-hover:translate-x-1 group-hover:-rotate-12" />
    </Link>;
}