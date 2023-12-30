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
            protocol:"https",
            hostname:"lh3.googleusercontent.com"
           },
          {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
          },
          {
            protocol: "https",
            hostname: "www.gravatar.com",
          },
          {
            protocol: "https",
            hostname: "i.stack.imgur.com",
          },
        ],
        minimumCacheTTL: 1500000,
      },
}

module.exports = nextConfig
