'use client';
import { useTranslations } from 'next-intl';

export default function WhyWeExistSection() {
  const t = useTranslations('whyWeExist');

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12">
          {t('title')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300">
          {t('description')}
        </p>
      </div>
    </section>
  );
}
