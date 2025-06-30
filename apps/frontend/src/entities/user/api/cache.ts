"use server";

import { cache } from "react";

import client from "@/shared/api/client";

import { USER_CACHE_USERS_ME_TAG } from "./tags";

export const getCurrentUserOrUndefined = cache(async () => {
  const { data } = await client.GET("/users/me", {
    next: { tags: [USER_CACHE_USERS_ME_TAG], revalidate: false },
    cache: "force-cache",
  });

  return data;
});

export const getCurrentUser = cache(async () => {
  const currentUser = await getCurrentUserOrUndefined();

  if (currentUser === undefined) {
    throw new Error(
      "The `getCurrentUser` function must be used only at protected pages.",
    );
  }

  return currentUser;
});
