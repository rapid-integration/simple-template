"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Collapsible from "@/shared/ui/collapsible";
import Sidebar from "@/shared/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  return (
    <Sidebar.Group>
      <Sidebar.GroupLabel>App</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton
                asChild
                tooltip={item.title}
                isActive={item.url === pathname}
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </Sidebar.MenuButton>
              {item.items?.length ? (
                <>
                  <Collapsible.Trigger asChild>
                    <Sidebar.MenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </Sidebar.MenuAction>
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <Sidebar.MenuSub>
                      {item.items.map((subItem) => (
                        <Sidebar.MenuSubItem key={subItem.title}>
                          <Sidebar.MenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </Sidebar.MenuSubButton>
                        </Sidebar.MenuSubItem>
                      ))}
                    </Sidebar.MenuSub>
                  </Collapsible.Content>
                </>
              ) : null}
            </Sidebar.MenuItem>
          </Collapsible>
        ))}
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
