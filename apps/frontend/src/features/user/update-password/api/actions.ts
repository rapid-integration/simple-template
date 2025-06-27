"use server";

import client from "@/shared/api/client";
import { UserPasswordRequest } from "@/shared/api/types";

export async function updateCurrentUserPassword(body: UserPasswordRequest) {
  const result = await client.PATCH("/users/me/password", { body });

  if (result.response.ok) {
    return {
      ok: result.response.ok,
    };
  } else {
    return {
      error: result.error,
      ok: result.response.ok,
    };
  }
}
