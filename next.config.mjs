/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ycuajmirzlqpgzuonzca.supabase.co",
                port: "",
                pathname: "**",
            },
        ],
        formats: ["image/webp"],
        minimumCacheTTL: 60 * 60 * 24 * 30,
    },
    reactStrictMode: false,
};


export default nextConfig;
