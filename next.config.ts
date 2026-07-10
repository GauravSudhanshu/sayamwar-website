import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /rooms-in-patna was a near-duplicate of /rooms targeting the same
      // "rooms in patna" intent — consolidated into one page to stop them
      // splitting search ranking signals against each other.
      {
        source: '/rooms-in-patna',
        destination: '/rooms',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
