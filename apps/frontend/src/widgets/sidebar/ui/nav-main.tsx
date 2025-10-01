"use client";

import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Sidebar from "@/shared/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    badge?: string | number;
    href: string;
    icon: LucideIcon;
  }[];
}) {
  
  const pathname = usePathname();

  return (
    <Sidebar.Group>
      <Sidebar.GroupLabel>Приложение</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {items.map((item) => (
          <Sidebar.MenuItem key={item.href}>
            <Sidebar.MenuButton
              asChild
              tooltip={item.title}
              isActive={item.href === pathname}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </Sidebar.MenuButton>
            {item.badge && <Sidebar.MenuBadge>{item.badge}</Sidebar.MenuBadge>}
          </Sidebar.MenuItem>
        ))}
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
