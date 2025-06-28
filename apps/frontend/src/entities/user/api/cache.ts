"use server";

import { cache } from "react";

import client from "@/shared/api/client";

import { USER_CACHE_USERS_ME_TAG } from "./tags";

export const getCurrentUser = cache(async () => {
  return await client.GET("/users/me", {
    next: { tags: [USER_CACHE_USERS_ME_TAG], revalidate: false },
    cache: "force-cache",
  });
});
