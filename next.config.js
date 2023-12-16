/** @type {import('next').NextConfig} */
const nextConfig = {
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
