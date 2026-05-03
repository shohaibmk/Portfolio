/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.8"],
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dbqwc4btc/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
