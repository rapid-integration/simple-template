import type { NextConfig } from "next";

export default {
  output: "standalone",
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
} as const satisfies NextConfig;
