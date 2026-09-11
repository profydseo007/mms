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
      ...['au', 'ca', 'ie'].flatMap((country) => [
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
      {
        source: '/uk/test-prepration',
        destination: '/uk/test-preparation/gcse',
        permanent: false,
      },
      {
        source: '/uk/test-prepration/:type*',
        destination: '/uk/test-preparation/:type*',
        permanent: false,
      },
      {
        source: '/nz/test-prepration',
        destination: '/nz/test-preparation',
        permanent: false,
      },
      {
        source: '/nz/test-prepration/:type*',
        destination: '/nz/test-preparation',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;