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
      // Redirect new-zealand-curriculum to /nz/new-zealand-curriculum
      {
        source: '/new-zealand-curriculum',
        destination: '/nz/new-zealand-curriculum',
        permanent: true,
      },
      {
        source: '/new-zealand-curriculum/:subject*',
        destination: '/nz/new-zealand-curriculum/:subject*',
        permanent: true,
      },
      // Redirect australian-curriculum to /au/australian-curriculum
      {
        source: '/australian-curriculum',
        destination: '/au/australian-curriculum',
        permanent: true,
      },
      {
        source: '/australian-curriculum/:subject*',
        destination: '/au/australian-curriculum/:subject*',
        permanent: true,
      },
      // Redirect canadian-curriculum to /ca/canadian-curriculum
      {
        source: '/canadian-curriculum',
        destination: '/ca/canadian-curriculum',
        permanent: true,
      },
      {
        source: '/canadian-curriculum/:subject*',
        destination: '/ca/canadian-curriculum/:subject*',
        permanent: true,
      },
      // Redirect irish-curriculum to /ie/irish-curriculum
      {
        source: '/irish-curriculum',
        destination: '/ie/irish-curriculum',
        permanent: true,
      },
      {
        source: '/irish-curriculum/:subject*',
        destination: '/ie/irish-curriculum/:subject*',
        permanent: true,
      },
      // Redirect uk-curriculum to /uk/uk-curriculum
      {
        source: '/uk-curriculum',
        destination: '/uk/uk-curriculum',
        permanent: true,
      },
      {
        source: '/uk-curriculum/:subject*',
        destination: '/uk/uk-curriculum/:subject*',
        permanent: true,
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