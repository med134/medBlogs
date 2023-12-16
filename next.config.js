/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i.ibb.co",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
          },
          {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
          },
        ],
        minimumCacheTTL: 1500000,
      },
}

module.exports = nextConfig
