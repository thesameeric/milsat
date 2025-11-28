'use client';
import Image from "next/image";
import TalkToAnExpert from "@/components/TalkToAnExpert";
import { useTranslations } from 'next-intl';

export default function DataCollection() {
    const t = useTranslations('dataPages.collection');
    const common = useTranslations('common');

    return <div>
        <section className="container flex items-center mx-auto my-40">
            <div className="w-full md:w-6/12">
                <h1 className="text-7xl">{t('title')}</h1>
                <span className="flex mt-10">
                    <p className="text-gray-400">
                        {t('subtitle')}
                    </p>
                </span>
                <span className="flex pt-10">
                    <TalkToAnExpert link="/contact" text={common('contactUs')} />
                </span>
            </div>
            <div className="">
                <video controls={false} autoPlay muted playsInline loop className="w-full max-w-4xl" src={'https://res.cloudinary.com/thesameeric/video/upload/v1761657727/milsat/GettyImages-1175032280_z6lfy5.mp4'}></video>
            </div>
        </section>
        <section className="bg-[#01191D]">
            <div className="container mx-auto py-40">
                <h2 className="text-5xl">{t('howWeDoIt')}</h2>
                <span className="flex pt-10 md:w-6/12">
                    <p>
                        {t('howWeDoItDescription')}
                    </p>
                </span>
            </div>
        </section>
        <section className="container flex justify-between items-center mx-auto py-40">
            <div className="w-full md:w-5/12">
                <h2 className="text-5xl leading-15">{t('aerialTitle')}</h2>
                <span className="inline-block pt-10">
                    <p>
                        {t('aerialDescription')}
                    </p>
                </span>
            </div>
            <div>
                <Image width={671} height={475} src={"/drone.png"} alt={"drone image"}></Image>
            </div>
        </section>
        <section className="container mx-auto">
            <h2 className="text-5xl">
                {t('realInsightTitle')}
            </h2>
            <div className="pt-10">
                <Image src={"/people.png"} width={1000} height={574} alt={""} className="w-full h-auto rounded-lg"></Image>
            </div>
            <div className="md:w-6/12">
                <p className="pt-10">
                    {t('realInsightDescription')}
                </p>
            </div>
        </section>
    </div>;
}
