import type { NextConfig } from "next";

export default {
  output: "standalone",
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
} as const satisfies NextConfig;
