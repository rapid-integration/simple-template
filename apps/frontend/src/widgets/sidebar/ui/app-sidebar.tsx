"use client";

import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { user } from "@/entities/user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/shared/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Login",
      url: "/login",
      icon: HomeIcon,
    },
    {
      title: "Register",
      url: "/register",
      icon: HomeIcon,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/projects/1",
    },
    {
      name: "Sales & Marketing",
      url: "/projects/2",
    },
    {
      name: "Travel",
      url: "/projects/3",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const sidebar = useSidebar();

  useEffect(() => {
    if (sidebar.open && sidebar.isMobile) {
      sidebar.setOpenMobile(false);
    }
  }, [pathname]);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
