'use client';
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function DataIntelligence() {
    const t = useTranslations('dataPages.intelligence');

    return <div>
        <section className="container flex items-center mx-auto my-20">
            <div className="w-full md:w-6/12">
                <h1 className="text-7xl">{t('title')}</h1>
                <span className="flex mt-10">
                    <p className="text-gray-400">
                        {t('subtitle')}
                    </p>
                </span>
            </div>
            <div className="">
                <video controls={false} autoPlay muted playsInline loop className="w-full max-w-4xl" src={'https://res.cloudinary.com/thesameeric/video/upload/v1761973579/milsat/0_Abstract_Design_1280x720_r030bj.mp4'}></video>
            </div>
        </section>
        <section className="container flex justify-between items-center mx-auto pb-40">
            <div className="w-full md:w-5/12">
                <h2 className="text-5xl leading-15">{t('researchTitle')}</h2>
                <span className="inline-block pt-10">
                    <p>
                        {t('researchDescription')}
                    </p>
                </span>
            </div>
            <div>
                <Image width={563} height={844} className="rounded-lg" src={"/enb.png"} alt={"research enablement"}></Image>
            </div>
        </section>
    </div>;
}