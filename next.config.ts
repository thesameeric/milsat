import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'factorialenergy.com',
      },
      {
        protocol: 'https',
        hostname: 'media.doormart.co',
      },
      {
        protocol: 'https',
        hostname: 'media.letterhead.cloud',
      },
      {
        protocol: 'https',
        hostname: 'd3htjribhyrfpy.cloudfront.net',
      },
    ],

  },
  transpilePackages: ['@letterhead/core'],
};

export default withNextIntl(nextConfig);
