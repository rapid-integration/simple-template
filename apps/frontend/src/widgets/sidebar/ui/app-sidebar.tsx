"use client";

import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { CurrentUserResponse } from "@/shared/api";
import Sidebar from "@/shared/ui/sidebar";

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

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user?: CurrentUserResponse }) {
  const pathname = usePathname();
  const sidebar = Sidebar.useContext();

  useEffect(() => {
    if (sidebar.open && sidebar.isMobile) {
      sidebar.setOpenMobile(false);
    }
  }, [pathname]);

  return (
    <Sidebar variant="inset" {...props}>
      <Sidebar.Header>
        <Sidebar.Trigger />
      </Sidebar.Header>
      <Sidebar.Content>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </Sidebar.Content>
      <Sidebar.Footer>{user && <NavUser user={user} />}</Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar>
  );
}
