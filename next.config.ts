import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/vortex-ai",
  assetPrefix: "/vortex-ai",
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
