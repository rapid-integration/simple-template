"use server";

import { RedirectType } from "next/navigation";
import { cache } from "react";

import { client } from "@/shared/api";
import { redirectWithNextURL } from "@/shared/lib/navigation";

import { USER_CACHE_USERS_ME_TAG } from "./tags";

export const getCurrentUserOrUndefined = cache(async () => {
  const { data } = await client.GET("/users/me", {
    next: {
      tags: [USER_CACHE_USERS_ME_TAG],
      revalidate: 30,
    },
  });

  return data;
});

export type GetCurrentUserOptions = {
  unauthorizedRedirectUrl?: string;
};

export const getCurrentUser = cache(
  async ({
    unauthorizedRedirectUrl = "/login",
  }: GetCurrentUserOptions = {}) => {
    const currentUser = await getCurrentUserOrUndefined();

    if (currentUser === undefined) {
      return await redirectWithNextURL(
        unauthorizedRedirectUrl,
        RedirectType.replace,
      );
    }

    return currentUser;
  },
);
