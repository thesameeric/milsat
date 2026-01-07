'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Milsat</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {t('tagline')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">{t('product')}</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li><Link href="/data/collection" className="hover:text-white transition-colors">{t('dataCollection')}</Link></li>
              <li><Link href="/data/integration" className="hover:text-white transition-colors">{t('dataIntegration')}</Link></li>
              <li><Link href="/data/intelligence" className="hover:text-white transition-colors">{t('dataIntelligence')}</Link></li>
              <li><a href="https://aspirant.milsat.africa" target='_blank' className="hover:text-white transition-colors">{t('aspirantProgram')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">{t('company')}</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{t('blog')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t('contact')}</Link></li>
              <li><Link href="privacy-policy" className="hover:text-white transition-colors">{t('privacy')}</Link></li>
            </ul>
          </div>
          <div>
            <Image width={200} height={100} src={'/ndpr.png'} alt={''} className='rounded-lg'></Image>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-400">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
