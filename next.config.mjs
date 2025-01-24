/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["primefaces.org"],
    unoptimized: true,
  },
  output: "export",
  distDir: "dist",
};

export default nextConfig;
