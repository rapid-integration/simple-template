"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { USER_CACHE_USERS_ME_TAG } from "@/entities/user";
import { clearSession } from "@/shared/api";
import { routes } from "@/shared/config/navigation";

export async function logout() {
  await clearSession();

  revalidateTag(USER_CACHE_USERS_ME_TAG);

  redirect(routes.login());
}
