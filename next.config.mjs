/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/bedocorentin",
  assetPrefix: "/bedocorentin",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
