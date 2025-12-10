import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/vortex-ai",
  assetPrefix: "/vortex-ai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
