/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'musicappstorage.s3.us-east-1.amazonaws.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
