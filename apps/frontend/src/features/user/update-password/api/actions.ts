"use server";

import { client, UserUpdatePasswordRequest } from "@/shared/api";

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
