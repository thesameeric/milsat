"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from '../logo';
import { Menu, X, ArrowRight } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 left-0 bg-black w-full z-[999]">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-8">
        <div className="flex-shrink-0">
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList className="flex-wrap gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm md:text-base">Data</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 w-[300px] sm:w-[400px] lg:w-[500px] p-4 lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <p
                        className="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md"
                      >
                        <div className="mb-2 text-base md:text-lg font-medium">
                          Loci
                        </div>
                        <p className="text-muted-foreground text-xs md:text-sm leading-tight">
                          Your all in one data platform
                        </p>
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/data/collection" title="Collection">
                  </ListItem>
                  <ListItem href="/data/integration" title="Integration">
                  </ListItem>
                  <ListItem href="/data/intelligence" title="Intelligence">
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm md:text-base">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[250px] md:w-[300px] gap-4 p-4">
                  <ListItem href="/solutions/finance" title="Banking & Finance">
                    Location intelligence for KYC, AML compliance, and fraud reduction
                  </ListItem>
                  <ListItem href="/solutions/logistics" title="Logistics & Delivery">
                    Location intelligent solutions for optimized delivery and fleet management
                  </ListItem>
                  <ListItem href="/solutions/public-health" title="Public Health">
                    Spatial data acquisition and analysis for micro-planning efforts
                  </ListItem>
                  <ListItem href="/solutions/marketing" title="Marketing">
                    Location intelligence for sales and marketing strategies
                  </ListItem>
                  <ListItem href="/solutions/manufacturing" title="Manufacturing">
                    IoT data acquisition for machine optimization and production
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about" className="text-sm md:text-base">Company</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuTrigger className="text-sm md:text-base">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[250px] md:w-[300px] gap-4 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/blog">
                        <div className="font-medium text-sm md:text-base">Blog</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/publications">
                        <div className="font-medium text-sm md:text-base">Papers</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact" className="text-sm md:text-base">Contact us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-black border-t border-[#343434]">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 text-[14px]">
            {/* Data Section */}
            <div>
              <div className="text-gray-400 text-xs uppercase font-semibold mb-2">Data</div>
              <div className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/data/collection"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Collection
                </Link>
                <Link
                  href="/data/integration"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Integration
                </Link>
                <Link
                  href="/data/intelligence"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Intelligence
                </Link>
              </div>
            </div>

            {/* Solutions Section */}
            <div>
              <div className="text-gray-400 text-xs uppercase font-semibold mb-2">Solutions</div>
              <div className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/solutions/finance"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Banking & Finance
                </Link>
                <Link
                  href="/solutions/logistics"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Logistics & Delivery
                </Link>
                <Link
                  href="/solutions/public-health"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Public Health
                </Link>
                <Link
                  href="/solutions/marketing"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Marketing
                </Link>
                <Link
                  href="/solutions/manufacturing"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Manufacturing
                </Link>
              </div>
            </div>

            {/* Company */}
            <Link
              href="/about"
              className="text-white hover:text-gray-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>

            {/* Resources Section */}
            <div>
              <div className="text-gray-400 text-xs uppercase font-semibold mb-2">Resources</div>
              <div className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/blog"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Blog
                </Link>
                <Link
                  href="/publications"
                  className="flex item-center gap-x-5 text-white hover:text-gray-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowRight width={15} /> Papers
                </Link>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
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
