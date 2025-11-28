'use client';
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function DataIntegration() {
    const t = useTranslations('dataPages.integration');

    return <div>
        <section className="container flex items-center mx-auto my-40">
            <div className="w-full md:w-6/12">
                <h1 className="text-7xl">{t('title')}</h1>
                <span className="flex mt-10">
                    <p className="text-gray-400">
                        {t('subtitle')}
                    </p>
                </span>
            </div>
            <div className="">
                <video controls={false} autoPlay muted playsInline loop className="w-full max-w-4xl" src={'https://res.cloudinary.com/thesameeric/video/upload/v1761660079/milsat/GettyImages-1226609402_fub96z.mp4'}></video>
            </div>
        </section>
        <section className="bg-[#01191D]">
            <div className="container flex w-full justify-between gap-x-10 items-center mx-auto py-40">
                <div className="w-5/12">
                    <h2 className="text-5xl">{t('ownershipTitle')}</h2>
                    <span className="flex pt-10 pr-10">
                        <p>
                            {t('ownershipDescription')}
                        </p>
                    </span>
                </div>
                <div>
                    <Image height={458} width={600} alt="database" className="rounded-lg" src={'/owner.png'} />
                </div>
            </div>
        </section>
        <section className="container flex justify-between items-center mx-auto py-40">
            <div className="w-full md:w-5/12">
                <h2 className="text-5xl leading-15">{t('toolsTitle')}</h2>
                <span className="inline-block pt-10">
                    <p>
                        {t('toolsDescription')}
                    </p>
                </span>
            </div>
            <div>
                <Image width={563} height={844} className="rounded-lg" src={"/tpe.png"} alt={"tool enhancement"}></Image>
            </div>
        </section>
    </div>;
}
