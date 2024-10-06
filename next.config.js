/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["encrypted-tbn0.gstatic.com", "img.freepik.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
