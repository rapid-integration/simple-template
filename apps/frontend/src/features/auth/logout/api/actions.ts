"use server";

import { redirect } from "next/navigation";

import { clearSession } from "@/shared/api/auth";

export async function logout() {
  await clearSession();
  redirect(`/login`);
}
