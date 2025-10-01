"use server";

import { revalidateTag } from "next/cache";

import { USER_CACHE_USERS_ME_TAG } from "@/entities/user";
import { client, setSession, UserRegistrationRequest } from "@/shared/api";
import { routes } from "@/shared/config/navigation";
import { redirectToNextURL } from "@/shared/lib/navigation";

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
  await redirectToNextURL({ fallbackUrl: routes.home() });
}
