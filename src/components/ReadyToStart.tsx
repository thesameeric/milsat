import { ArrowRight, TagIcon } from 'lucide-react';
import Link from 'next/link';
export default function ReadyToStart() {
    return (
        <div className='border-y border-[#343434]'>
            <section className="grid grid-cols-1 md:grid-cols-2 mx-auto text-white">
                <Link href={'/contact'} className="relative py-10 px-6 sm:py-16 sm:px-12 md:py-20 md:px-40 hover:bg-[#080808] cursor-pointer transition-all duration-200 group">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                        Ready to get started?
                    </h2>
                    <p className="text-base sm:text-lg mb-6 md:mb-10 text-gray-400">
                        Join thousands of users leveraging our platform to transform their data into actionable insights and impactful results.
                    </p>
                </Link>
                <Link href={'/contact'} className="border-t md:border-t-0 md:border-l border-[#343434] relative py-10 px-6 sm:py-16 sm:px-12 md:py-20 md:px-40 hover:bg-[#080808] cursor-pointer transition-all duration-200 group">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                        Ready to get started?
                    </h2>
                    <p className="text-base sm:text-lg mb-6 md:mb-10 text-gray-400">
                        Join thousands of users leveraging our platform to transform their data into actionable insights and impactful results.
                    </p>
                </Link>
            </section>
        </div>
    );
}