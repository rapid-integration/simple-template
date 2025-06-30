import { FragmentProps } from "react";

import { withCurrentUser, WithCurrentUserProps } from "@/entities/user";
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar";

export default withCurrentUser(
  ({ currentUser, children }: WithCurrentUserProps & FragmentProps) => {
    return (
      <SidebarProvider>
        <AppSidebar user={currentUser} />
        <SidebarInset data-vaul-drawer-wrapper>{children}</SidebarInset>
      </SidebarProvider>
    );
  },
);
