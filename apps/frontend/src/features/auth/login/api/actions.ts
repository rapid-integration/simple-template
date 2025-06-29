"use server";

import { redirect } from "next/navigation";

import { setSession } from "@/shared/api/auth";
import client from "@/shared/api/client";
import { serializeFormData } from "@/shared/api/serializers";
import { BodyLoginAuthLoginPost } from "@/shared/api/types";

export async function login(body: BodyLoginAuthLoginPost) {
  const result = await client.POST("/auth/login", {
    body,
    bodySerializer: serializeFormData,
  });

  if (result.response.ok && result.data) {
    await setSession(result.data);
    redirect("/");
  } else {
    return {
      error: result.error,
      status: result.response.status,
      // ok: result.response.ok,
    };
  }
}
