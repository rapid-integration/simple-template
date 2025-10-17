import type { NextConfig } from "next";

export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  output: "standalone",
  allowedDevOrigins: ["*.cloudpub.ru"],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    staleTimes: {
      dynamic: 30,
    },
  },
} as const satisfies NextConfig;
