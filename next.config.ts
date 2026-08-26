import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/meu-portfolio",
  assetPrefix: "/meu-portfolio/",
};

export default nextConfig;
