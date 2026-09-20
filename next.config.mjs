/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return [
      // /bio was renamed to /about (Sept 2026). Permanent so inbound links and
      // search results follow through instead of 404ing.
      { source: "/bio", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
