"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from '../logo';

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

        {/* Mobile menu placeholder - Basic links for mobile */}
        <div className="flex sm:hidden gap-2 text-sm">
          <Link href="/about" className="text-white hover:text-gray-300 px-2">Company</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 px-2">Contact</Link>
        </div>
      </div>
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
