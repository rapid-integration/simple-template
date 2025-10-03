"use client";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  NavLink,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { TbHome, TbSettings } from "react-icons/tb";

import { CurrentUserResponse } from "@/shared/api";
import { routes } from "@/shared/config/navigation";

const data = [
  {
    icon: TbHome,
    href: "/",
    label: "Главная",
  },
  {
    icon: TbSettings,
    href: "/settings",
    label: "Настройки",
  },
];

export type ShellProps = React.PropsWithChildren<{
  currentUser: CurrentUserResponse;
}>;

export const Shell: React.FC<ShellProps> = ({ children, currentUser }) => {
  const pathname = usePathname();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [open, { toggle, close }] = useDisclosure();

  useEffect(() => {
    if (open) {
      close();
    }
  }, [pathname]);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !open },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" maw="48rem" mx="auto" gap="xs">
          <Burger
            opened={open}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          />
          <Group gap="lg" justify="space-between" style={{ flex: 1 }}>
            <Group gap="xs">
              <Image
                src="/favicon.svg"
                alt="Логотип"
                width={24}
                height={24}
                draggable={false}
              />
              <Text fw={600}>Template</Text>
            </Group>

            {!isMobile && (
              <Group me="auto" gap="xs" visibleFrom="sm">
                {data.map((item) => {
                  return (
                    <Button
                      key={item.href}
                      component={Link}
                      href={item.href}
                      color="gray"
                      variant={pathname === item.href ? "light" : "subtle"}
                      style={{
                        color: "var(--mantine-body-color)",
                      }}
                      px="sm"
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Group>
            )}
            <ActionIcon
              size="xl"
              radius="xl"
              variant="transparent"
              component={Link}
              href={routes.settings()}
              aria-label="Настройки"
            >
              <Avatar name={currentUser.username} color="initials" />
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>

      {isMobile && (
        <AppShell.Navbar py="xs">
          {data.map((item) => (
            <NavLink
              key={item.href}
              component={Link}
              leftSection={<item.icon size={28} strokeWidth={1.5} />}
              label={item.label}
              href={item.href}
              fw={500}
              active={pathname === item.href}
              px="md"
            />
          ))}
        </AppShell.Navbar>
      )}

      <AppShell.Main px="md" maw="48rem" mx="auto">
        <Stack py="md">{children}</Stack>
      </AppShell.Main>
    </AppShell>
  );
};
