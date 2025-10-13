/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard build (not static export) to support API routes
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
