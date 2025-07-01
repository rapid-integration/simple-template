"use client";

import {
  ChevronDownIcon,
  Folder,
  MoreHorizontal,
  Share,
  Trash2,
} from "lucide-react";
import Link from "next/link";

import Collapsible from "@/shared/ui/collapsible";
import DropdownMenu from "@/shared/ui/dropdown-menu";
import Sidebar from "@/shared/ui/sidebar";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
  }[];
}) {
  const { isMobile } = Sidebar.useContext();

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <Sidebar.Group>
        <Sidebar.GroupLabel asChild>
          <Collapsible.Trigger>
            <span>Projects</span>
            <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </Collapsible.Trigger>
        </Sidebar.GroupLabel>
        <Collapsible.Content>
          <Sidebar.Menu>
            {projects.map((item) => (
              <Sidebar.MenuItem key={item.name}>
                <Sidebar.MenuButton asChild>
                  <Link href={item.url}>{item.name}</Link>
                </Sidebar.MenuButton>
                <DropdownMenu>
                  <DropdownMenu.Trigger asChild>
                    <Sidebar.MenuAction showOnHover>
                      <MoreHorizontal />
                      <span className="sr-only">More</span>
                    </Sidebar.MenuAction>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content
                    className="w-48"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    <DropdownMenu.Item>
                      <Folder className="text-muted-foreground" />
                      <span>View Project</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <Share className="text-muted-foreground" />
                      <span>Share Project</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>
                      <Trash2 className="text-muted-foreground" />
                      <span>Delete Project</span>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Sidebar.MenuItem>
            ))}
            {/* <SidebarMenuItem>
              <SidebarMenuButton>
                <MoreHorizontal />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem> */}
          </Sidebar.Menu>
        </Collapsible.Content>
      </Sidebar.Group>
    </Collapsible>
  );
}
