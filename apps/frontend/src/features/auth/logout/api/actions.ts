"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { clearSession } from "@/shared/api/auth";

export async function logout() {
  const list = await headers();
  const referer = list.get("referer") || "/";
  await clearSession();
  redirect(`/login?next=${encodeURIComponent(referer)}`);
}
