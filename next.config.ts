const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/less-than-zero/" : "",
  basePath: isProd ? "/less-than-zero" : "",
  output: "export",
};

export default nextConfig;
