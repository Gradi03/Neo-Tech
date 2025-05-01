/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
