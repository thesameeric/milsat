import { ArrowRight, TagIcon } from 'lucide-react';
export default function ReadyToStart() {
    return (
        <section className="container flex justify-between mx-auto text-white py-40 px-8">
            <div className="md:w-4/12">
                <h2 className="text-xl md:text-4xl mb-6">
                    Ready to get started?
                </h2>
                <p className="text-lg mb-10 max-w-2xl">
                    Join thousands of users leveraging our platform to transform their data into actionable insights and impactful results.
                </p>
                <span className='flex justify-start items-center'>
                    <a
                        href="#get-started"
                        className="inline-block text-sm px-6 py-2 bg-white text-slate-900 font-semibold rounded-md hover:bg-gray-200 transition-colors"
                    >
                        Get Started Now
                    </a>
                    {" "}
                    <a className="flex items-center text-sm ml-10 hover:cursor-pointer hover:underline">Talk to an expert <ArrowRight className='ml-3' /></a>
                </span>
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:gap-0 md:w-7/12">
                <div className='border-l text-[16px] border-dashed border-gray-900 pl-10 md:w-6/12'>
                    <TagIcon className='mb-5' />
                    <h3 className='inline-block pb-5'>Always know what your pay</h3>
                    <p className='text-gray-500'>Integrated per-transaction pricing with no hidden fees.</p>
                    <a className="inline-block text-sm mt-10 cursor-pointer hover:underline text-secondary">
                        Pricing Details <ArrowRight className='inline ml-2' />
                    </a>
                </div>
            </div>
        </section>
    );
}