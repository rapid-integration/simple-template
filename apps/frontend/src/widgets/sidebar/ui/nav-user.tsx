"use client";

import {
  ChevronsUpDownIcon,
  LogOut,
  PaletteIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useActionState } from "react";

import { parseInitials } from "@/entities/user";
import { logout } from "@/features/auth/logout";
import { CurrentUserResponse } from "@/shared/api/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/ui/sidebar";

import { ThemeRadioGroup } from "./theme-radio-group";

export function NavUser({ user }: { user: CurrentUserResponse }) {
  const { isMobile } = useSidebar();
  const pathname = usePathname();
  const [, action, pending] = useActionState(logout, undefined);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              isActive={pathname.includes("/profile")}
            >
              <Avatar className="size-4 text-xs">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${user.username}`}
                  alt={user.username}
                />
                <AvatarFallback>{parseInitials(user.username)}</AvatarFallback>
              </Avatar>
              {/* <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div> */}
              <span className="truncate">{user.username}</span>
              <ChevronsUpDownIcon className="me-0.5 ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
            side={isMobile ? "bottom" : "right"}
            align={isMobile ? "center" : "end"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${user.username}`}
                    alt={user.username}
                  />
                  <AvatarFallback>NG</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.username}</span>
                  <span className="truncate font-mono text-xs text-muted-foreground">
                    {user.id}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <UserIcon />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                Preferences
              </DropdownMenuLabel>
              <div className="flex items-center gap-2 rounded-sm px-2 py-px text-sm select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground">
                <PaletteIcon />
                <span>Theme</span>
                <ThemeRadioGroup className="ms-auto" />
              </div>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onSelect={() => startTransition(action)}
              disabled={pending}
            >
              <LogOut />
              <span>{pending ? "Logging out…" : "Logout"}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
