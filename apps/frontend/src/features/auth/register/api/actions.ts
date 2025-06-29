"use server";

import { setSession } from "@/shared/api/auth";
import client from "@/shared/api/client";
import { UserRegistrationRequest } from "@/shared/api/types";

export async function register(body: UserRegistrationRequest) {
  const result = await client.POST("/auth/register", { body });

  if (result.response.ok && result.data) {
    await setSession(result.data);
    return { ok: result.response.ok };
  } else {
    return {
      error: result.error,
      status: result.response.status,
      ok: result.response.ok,
    };
  }
}
