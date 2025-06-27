"use client";

import { user } from "@/entities/user";
import { SidebarTrigger } from "@/shared/ui/sidebar";
import { NavUser } from "./nav-user";

export function SiteHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2">
      <div className="flex grow items-center gap-2 px-4">
        <SidebarTrigger />
        <NavUser user={user} />
      </div>
    </header>
  );
}
