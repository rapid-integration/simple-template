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
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/ui/sidebar";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <Collapsible.Trigger>
            <span>Projects</span>
            <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </Collapsible.Trigger>
        </SidebarGroupLabel>
        <Collapsible.Content>
          <SidebarMenu>
            {projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>{item.name}</Link>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenu.Trigger asChild>
                    <SidebarMenuAction showOnHover>
                      <MoreHorizontal />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
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
              </SidebarMenuItem>
            ))}
            {/* <SidebarMenuItem>
              <SidebarMenuButton>
                <MoreHorizontal />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem> */}
          </SidebarMenu>
        </Collapsible.Content>
      </SidebarGroup>
    </Collapsible>
  );
}
