"use client";

import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
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
    name: "Главная",
    href: "/",
  },
  {
    icon: TbSettings,
    name: "Настройки",
    href: "/settings",
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
      p="md"
    >
      <AppShell.Header>
        <Group h="100%" px={isMobile ? "md" : undefined} maw="48rem" mx="auto">
          <Burger
            opened={open}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group gap="xs">
              <Image src="/favicon.ico" alt="" width={24} height={24} />
              <Text fw={600}>Template</Text>
            </Group>

            {!isMobile && (
              <Group ms="xs" me="auto" gap="xs" visibleFrom="sm">
                {data.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Button
                      key={item.href}
                      component={Link}
                      href={item.href}
                      variant={active ? "light" : "subtle"}
                      color="gray"
                      px="xs"
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </Group>
            )}
            <Avatar
              component={Link}
              href={routes.settings()}
              name={currentUser.username}
              color="initials"
              aria-label="Настройки"
            />
          </Group>
        </Group>
      </AppShell.Header>

      {isMobile && (
        <AppShell.Navbar py="xs" px="xs">
          <Stack gap={4}>
            {data.map((item) => {
              const active = pathname === item.href;

              return (
                <Button
                  key={item.href}
                  component={Link}
                  leftSection={<item.icon size={24} />}
                  href={item.href}
                  variant={active ? "light" : "subtle"}
                  color="gray"
                  justify="start"
                  px={8}
                >
                  {item.name}
                </Button>
              );
            })}
          </Stack>
        </AppShell.Navbar>
      )}

      <AppShell.Main maw="48rem" mx="auto">
        {children}
      </AppShell.Main>
    </AppShell>
  );
};
