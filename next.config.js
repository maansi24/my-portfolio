/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
