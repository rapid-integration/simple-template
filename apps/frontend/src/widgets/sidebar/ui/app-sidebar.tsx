"use client";

import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { CurrentUserResponse } from "@/shared/api";
import { routes } from "@/shared/config/navigation";
import Sidebar from "@/shared/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const items = [
  {
    title: "Главная",
    href: routes.home(),
    icon: HomeIcon,
  },
];

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user?: CurrentUserResponse;
};

export const AppSidebar: React.FC<AppSidebarProps> = ({ user, ...props }) => {
  const pathname = usePathname();
  const sidebar = Sidebar.useContext();

  useEffect(() => {
    if (sidebar.open && sidebar.isMobile) {
      sidebar.setOpenMobile(false);
    }
  }, [pathname]);

  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        {!sidebar.isMobile && <Sidebar.Trigger />}
        <h1 className="px-2 pt-2 text-xl font-semibold text-accent-foreground md:text-2xl">
          Template
        </h1>
      </Sidebar.Header>
      <Sidebar.Content>
        <NavMain items={items} />
      </Sidebar.Content>
      <Sidebar.Footer>{user && <NavUser user={user} />}</Sidebar.Footer>
    </Sidebar>
  );
};
