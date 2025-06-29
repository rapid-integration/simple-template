"use server";

import client from "@/shared/api/client";
import { UserUpdatePasswordRequest } from "@/shared/api/types";

export async function updateCurrentUserPassword(
  body: UserUpdatePasswordRequest,
) {
  const result = await client.PATCH("/users/me/password", { body });

  if (result.response.ok) {
    return {
      ok: result.response.ok,
      status: result.response.status,
    };
  } else {
    return {
      error: result.error,
      ok: result.response.ok,
      status: result.response.status,
    };
  }
}
