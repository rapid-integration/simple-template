"use server";

import { revalidateTag } from "next/cache";

import { USER_CACHE_USERS_ME_TAG } from "@/entities/user";
import client from "@/shared/api/client";
import { setSession } from "@/shared/api/session";
import { UserRegistrationRequest } from "@/shared/api/types";
import { redirectToNextUrl } from "@/shared/lib/server/redirect";

export async function register(body: UserRegistrationRequest) {
  const { response, data, error } = await client.POST("/auth/register", {
    body,
  });

  if (!response.ok || !data) {
    return {
      error,
      status: response.status,
    };
  }

  revalidateTag(USER_CACHE_USERS_ME_TAG);

  await setSession(data);
  await redirectToNextUrl();
}
