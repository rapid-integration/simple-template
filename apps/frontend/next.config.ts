import type { NextConfig } from "next";

export default {
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
} as const satisfies NextConfig;
