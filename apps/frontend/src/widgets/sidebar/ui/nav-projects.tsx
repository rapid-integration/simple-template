"use client";

import {
  ChevronDownIcon,
  FolderIcon,
  MoreHorizontal,
  ShareIcon,
  Trash2Icon
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
            <span>Проекты</span>
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
                      <span className="sr-only">Ещё</span>
                    </Sidebar.MenuAction>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content
                    className="w-52"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    <DropdownMenu.Item>
                      <FolderIcon />
                      <span>Открыть проект</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <ShareIcon />
                      <span>Поделиться проектом</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item variant="destructive">
                      <Trash2Icon />
                      <span>Удалить проект</span>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Sidebar.MenuItem>
            ))}
            {/* <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <MoreHorizontalIcon />
                <span>Ещё</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem> */}
          </Sidebar.Menu>
        </Collapsible.Content>
      </Sidebar.Group>
    </Collapsible>
  );
}
