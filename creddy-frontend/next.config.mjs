/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn-icons-png.flaticon.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'moralis.io',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cryptologos.cc',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'thegivingblock.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.prod.website-files.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
