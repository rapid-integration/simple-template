import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { getCurrentUser } from "@/entities/user";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const currentUser = await getCurrentUser();

  if (currentUser.response.status !== 404 && currentUser.response.ok) {
    return redirect("/");
  }

  return children;
}
