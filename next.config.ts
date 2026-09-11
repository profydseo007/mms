// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/test-prepration',
        destination: '/test-preparation',
        permanent: false,
      },
      {
        source: '/test-prepration/:type*',
        destination: '/test-preparation/:type*',
        permanent: false,
      },
      ...['au', 'ca', 'ie', 'uk', 'nz'].flatMap((country) => [
        {
          source: `/${country}/test-prepration`,
          destination: `/${country}/test-preparation`,
          permanent: false,
        },
        {
          source: `/${country}/test-prepration/:type*`,
          destination: `/${country}/test-preparation/:type*`,
          permanent: false,
        },
      ]),
    ];
  },
};

export default nextConfig;