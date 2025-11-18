import type { NextConfig } from "next";

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
};

export default nextConfig;
