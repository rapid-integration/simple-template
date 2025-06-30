"use server";

import { setSession } from "@/shared/api/auth";
import client from "@/shared/api/client";
import { serializeFormData } from "@/shared/api/serializers";
import { BodyLoginAuthLoginPost } from "@/shared/api/types";
import { redirectNext } from "@/shared/lib/redirect";

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

  await setSession(data);
  await redirectNext();
}
