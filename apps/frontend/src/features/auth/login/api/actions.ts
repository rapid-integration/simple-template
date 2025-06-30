"use server";

import { revalidateTag } from "next/cache";

import { USER_CACHE_USERS_ME_TAG } from "@/entities/user";
import client from "@/shared/api/client";
import { serializeFormData } from "@/shared/api/serializers";
import { setSession } from "@/shared/api/session";
import { BodyLoginAuthLoginPost } from "@/shared/api/types";
import { redirectToNextUrl } from "@/shared/lib/server/redirect";

export async function login(body: BodyLoginAuthLoginPost) {
  const { response, data, error } = await client.POST("/auth/login", {
    body,
    bodySerializer: serializeFormData,
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
