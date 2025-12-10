import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://milsat.africa'),
  title: {
    default: "Milsat - Revealing Africa's True Landscape Through Local Data",
    template: "%s | Milsat"
  },
  description: "Milsat provides accurate, locally-sourced data and intelligence across Africa. Transform your operations with our field mapping, data collection, and geospatial intelligence services.",
  keywords: [
    "African data",
    "geospatial intelligence",
    "data collection Africa",
    "field mapping",
    "local data Africa",
    "business intelligence Africa",
    "mapping services",
    "African market data",
    "location intelligence",
    "Milsat"
  ],
  authors: [{ name: "Milsat Africa" }],
  creator: "Milsat Africa",
  publisher: "Milsat Africa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milsat.africa",
    siteName: "Milsat",
    title: "Milsat - Revealing Africa's True Landscape Through Local Data",
    description: "Milsat provides accurate, locally-sourced data and intelligence across Africa. Transform your operations with our field mapping, data collection, and geospatial intelligence services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milsat - African Data Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milsat - Revealing Africa's True Landscape Through Local Data",
    description: "Milsat provides accurate, locally-sourced data and intelligence across Africa. Transform your operations with our field mapping, data collection, and geospatial intelligence services.",
    images: ["/og-image.png"],
    creator: "@milsatafrica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale || 'en'}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-09L72TDE3P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-09L72TDE3P');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <Toaster />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
