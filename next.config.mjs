/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'media.licdn.com',
      pathname: '/dms/image/**',
    },{
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: 'dbqwc4btc/image/upload/**',
    }],
  },
};

export default nextConfig;
