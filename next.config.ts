import type { NextConfig } from "next";

// GITHUB_ACTIONS env var is automatically set to "true" by GitHub Actions
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages ? "/sunetgardony" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGithubPages ? "/sunetgardony/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
