"use server";

import { setSession } from "@/shared/api/auth";
import client from "@/shared/api/client";
import { UserRegistrationRequest } from "@/shared/api/types";
import { redirectNext } from "@/shared/lib/redirect";

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

  await setSession(data);
  await redirectNext();
}
