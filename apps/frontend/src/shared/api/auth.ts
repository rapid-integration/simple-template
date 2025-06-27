"use server";

import { cookies } from "next/headers";

import { AccessTokenResponse } from "./types";

export async function getSession() {
  const store = await cookies();

  const cookie = store.get("session");

  if (!cookie) {
    return null;
  }

  try {
    return JSON.parse(cookie.value) as AccessTokenResponse;
  } catch (error) {
    console.error("Failed to parse session cookie", error);
    return null;
  }
}

export async function setSession(sessionData: AccessTokenResponse) {
  const store = await cookies();

  store.set("session", JSON.stringify(sessionData), {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(sessionData.expires_at),
    httpOnly: true,
    sameSite: "lax",
  });
}

export async function clearSession() {
  const store = await cookies();

  store.delete("session");
}
