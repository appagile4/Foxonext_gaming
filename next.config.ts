import type { NextConfig } from "next";

const rawEnv = (process.env.NEXT_PUBLIC_API_URL || "").trim().replace(/\/+$/, "");
const targetApi = rawEnv
  ? rawEnv.endsWith("/api")
    ? rawEnv
    : `${rawEnv}/api`
  : "https://api.foxonext.com/api";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${targetApi}/:path*`,
      },
    ];
  },
};

export default nextConfig;
