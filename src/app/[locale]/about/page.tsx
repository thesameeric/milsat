'use client';
import { NewsItem } from "@/components/News";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('about');

    return (
        <div className="container mx-auto flex flex-col items-center justify-center p-6">
            <section className="mt-40">
                <h1 className="font-bold text-4xl md:text-7xl"><p className="text-gray-400 m-0 pb-5">{t('subtitle')}</p>{t('title')}</h1>
                <span className="md:w-7/12 inline-block mt-10">
                    <p>
                        {t('intro')}
                    </p>
                </span>
            </section>
            <section className="flex items-center mt-40 w-full">
                <div className="hidden md:flex w-6/12">
                    <Image width={679} height={900} src={"/about.png"} alt={""}></Image>
                </div>
                <div className="md:w-6/12">
                    <div>
                        <h2 className="text-5xl">{t('flippedTitle')}</h2>
                        <span className="flex pt-10">
                            <p>
                                {t('flippedDescription')}
                            </p>
                        </span>
                    </div>
                    <div className="mt-40">
                        <h3 className="text-5xl leading-14">
                            {t('commitment')}
                        </h3>
                    </div>
                </div>
            </section>
            <NewsItem />
        </div>
    );
}