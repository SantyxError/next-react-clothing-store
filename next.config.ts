import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pisces.bbystatic.com",
        port: "",
        pathname: "/**", 
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
