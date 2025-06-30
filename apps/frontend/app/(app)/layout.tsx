import { FragmentProps } from "react";

import { getCurrentUser } from "@/entities/user";
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar";

export default async function AppAppLayout({ children }: FragmentProps) {
  const currentUser = await getCurrentUser();

  return (
    <SidebarProvider>
      <AppSidebar user={currentUser} />
      <SidebarInset data-vaul-drawer-wrapper>{children}</SidebarInset>
    </SidebarProvider>
  );
}
