"use server";

import client from "@/shared/api/client";

import { USER_CACHE_USERS_ME_TAG } from "./tags";

export async function getCurrentUser() {
  return await client.GET("/users/me", {
    next: { tags: [USER_CACHE_USERS_ME_TAG] },
  });
}
