import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Konfigurasi untuk optimasi gambar
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "instagram.com",
      },
      {
        protocol: "https",
        hostname: "*.instagram.com",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },

  // Eksperimental untuk optimasi
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
