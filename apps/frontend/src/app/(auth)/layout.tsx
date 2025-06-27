import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { getSession } from "@/shared/api/auth";

export default async function AuthLayout({ children }: { children: ReactNode }) {
  const session = await getSession();

  if (session?.access_token) {
    return redirect("/");
  }

  return children;
}
