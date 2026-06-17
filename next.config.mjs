/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.thum.io',
                port: '',
                pathname: '/**',
            },
        ],
        qualities: [25, 50, 75, 100],
    },
}

export default nextConfig;
