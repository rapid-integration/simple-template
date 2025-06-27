import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { getCurrentUser } from "@/entities/user";
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar";

export default async function AppAppLayout({
  children,
}: {
  children: ReactNode;
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser.data) {
    return redirect("/login");
  }

  return (
    <SidebarProvider>
      <AppSidebar user={currentUser.data} />
      <SidebarInset data-vaul-drawer-wrapper>{children}</SidebarInset>
    </SidebarProvider>
  );
}
