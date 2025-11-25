import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains:['https://cdn.exitofasteners.com/', 'https://exitofasteners.com/']
  },
  /* config options here */
};

export default nextConfig;
