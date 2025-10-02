import { createNavigationConfig } from "next-safe-navigation";
import { z } from "zod/v4/mini";

export const { routes, useSafeParams, useSafeSearchParams } =
  createNavigationConfig((defineRoute) => ({
    home: defineRoute("/"),
    settings: defineRoute("/settings"),
    login: defineRoute("/login", {
      search: z.optional(
        z.object({ next: z.optional(z.string().check(z.trim())) }),
      ),
    }),
    register: defineRoute("/register", {
      search: z.optional(
        z.object({ next: z.optional(z.string().check(z.trim())) }),
      ),
    }),
  }));
