/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.com', // Wildcard for any .com domains
      },
      {
        protocol: 'https',
        hostname: '**.net', // Wildcard for any .net domains
      },
      {
        protocol: 'https',
        hostname: 'i.kinja-img.com', // Specific domain example
      },
      // Add more patterns as needed
    ],
  },
};

export default nextConfig;
