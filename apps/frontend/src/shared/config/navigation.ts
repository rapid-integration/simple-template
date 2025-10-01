import { createNavigationConfig } from "next-safe-navigation";
import { z } from "zod";

export const { routes, useSafeParams, useSafeSearchParams } =
  createNavigationConfig((defineRoute) => ({
    home: defineRoute("/"),
    settings: defineRoute("/settings"),
    login: defineRoute("/login", {
      search: z.object({ next: z.string().default("/") }).optional(),
    }),
    register: defineRoute("/register", {
      search: z.object({ next: z.string().default("/") }).optional(),
    }),
  }));
