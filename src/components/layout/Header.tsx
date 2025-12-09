"use client"

import * as React from "react"
import { Logo } from '../logo';
import { Menu, X, ArrowRight } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const t = useTranslations('nav');
  const solutions = useTranslations('solutions');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 left-0 bg-black w-full z-[999]">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-8">
        <div className="flex-shrink-0">
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <NavigationMenu viewport={!!isMobile} className="hidden sm:flex">
            <NavigationMenuList className="flex-wrap gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm md:text-base">{t('data')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 w-[300px] sm:w-[400px] lg:w-[250px] p-4 lg:grid-cols-1">
                    <ListItem href="/data/collection" title={t('collection')}>
                    </ListItem>
                    <ListItem href="/data/integration" title={t('integration')}>
                    </ListItem>
                    <ListItem href="/data/intelligence" title={t('intelligence')}>
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm md:text-base">{t('solutions')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] md:w-[300px] gap-4 p-4">
                    {/* <ListItem href="/solutions/logistics" title={solutions('logistics.title')}>
                      {solutions('logistics.description')}
                    </ListItem> */}
                    <ListItem href="/solutions/marketing" title={solutions('marketing.title')}>
                      {solutions('marketing.description')}
                    </ListItem>
                    <ListItem href="/solutions/public-health" title={solutions('publicHealth.title')}>
                      {solutions('publicHealth.description')}
                    </ListItem>
                    <ListItem href="/solutions/finance" title={solutions('bankingFinance.title')}>
                      {solutions('bankingFinance.description')}
                    </ListItem>
                    {/* <ListItem href="/solutions/manufacturing" title={solutions('manufacturing.title')}>
                      {solutions('manufacturing.description')}
                    </ListItem> */}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about" className="text-sm md:text-base">{t('company')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden lg:block">
                <NavigationMenuTrigger className="text-sm md:text-base">{t('resources')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] md:w-[300px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/blog">
                          <div className="font-medium text-sm md:text-base">{t('blog')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/publications">
                          <div className="font-medium text-sm md:text-base">{t('papers')}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact" className="text-sm md:text-base">{t('contact')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile menu button and language switcher */}
        <div className="sm:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-black border-t border-[#343434]">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 text-[14px]">
            {/* Data Section */}
            <div>
              <div className="text-gray-400 text-xs uppercase font-semibold mb-2">{t('data')}</div>
              <div className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/data/collection"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {t('collection')}
                </Link>
                <Link
                  href="/data/integration"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {t('integration')}
                </Link>
                <Link
                  href="/data/intelligence"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {t('intelligence')}
                </Link>
              </div>
            </div>

            {/* Solutions Section */}
            <div>
              <div className="text-gray-400 text-xs uppercase font-semibold mb-2">{t('solutions')}</div>
              <div className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/solutions/finance"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {solutions('bankingFinance.title')}
                </Link>
                <Link
                  href="/solutions/logistics"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {solutions('logistics.title')}
                </Link>
                <Link
                  href="/solutions/public-health"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {solutions('publicHealth.title')}
                </Link>
                <Link
                  href="/solutions/marketing"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {solutions('marketing.title')}
                </Link>
                <Link
                  href="/solutions/manufacturing"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {solutions('manufacturing.title')}
                </Link>
              </div>
            </div>

            {/* Company */}
            <Link
              href="/about"
              className="text-white hover:text-gray-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('company')}
            </Link>

            {/* Resources Section */}
            <div>
              <div className="text-gray-400 text-xs uppercase font-semibold mb-2">{t('resources')}</div>
              <div className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/blog"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {t('blog')}
                </Link>
                <Link
                  href="/publications"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> {t('papers')}
                </Link>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
