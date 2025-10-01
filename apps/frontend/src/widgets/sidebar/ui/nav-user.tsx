import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserAvatar } from "@/entities/user";
import { CurrentUserResponse } from "@/shared/api";
import { routes } from "@/shared/config/navigation";
import Sidebar from "@/shared/ui/sidebar";
import { ThemeRadioGroup } from "@/shared/ui/ThemeRadioGroup";

export function NavUser({ user }: { user: CurrentUserResponse }) {
  const pathname = usePathname();

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton
          asChild
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          isActive={pathname == routes.settings()}
        >
          <Link href={routes.settings()}>
            <UserAvatar user={user} className="size-8 text-sm" />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.username}</span>
              <span className="truncate font-normal text-muted-foreground">
                {user.id}
              </span>
            </div>
          </Link>
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
      <Sidebar.Separator />
      <ThemeRadioGroup className="bg-sidebar" />
    </Sidebar.Menu>
  );
}
