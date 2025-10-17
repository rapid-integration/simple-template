"use client";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Button,
  DefaultMantineColor,
  Group,
  Indicator,
  NavLink,
  Stack,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HiCog6Tooth, HiMiniHome, HiMiniUsers } from "react-icons/hi2";
import { IconType } from "react-icons/lib";

import { CurrentUserResponse } from "@/shared/api";
import { routes } from "@/shared/config";

const data: {
  icon: IconType;
  href: string;
  label: React.ReactNode;
  indicator?: {
    label: React.ReactNode;
    color?: DefaultMantineColor;
  };
}[] = [
  {
    icon: HiMiniHome,
    href: routes.home(),
    label: "Главная",
  },
  {
    icon: HiMiniUsers,
    href: routes.users(),
    label: "Пользователи",
  },
  {
    icon: HiCog6Tooth,
    href: routes.settings(),
    label: "Настройки",
  },
];

export type ShellProps = React.PropsWithChildren<{
  currentUser: CurrentUserResponse;
}>;

export const Shell: React.FC<ShellProps> = ({ children, currentUser }) => {
  const pathname = usePathname();

  const [open, { toggle, close }] = useDisclosure();

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    if (open) {
      close();
    }
  }, [pathname]);

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{
        width: 320,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !open },
      }}
      transitionDuration={isMobile ? undefined : 0}
    >
      <AppShell.Header>
        <Group h="100%" px="md" maw="48rem" mx="auto" gap="xs">
          <Burger
            opened={open}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            lineSize={2}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          />
          <Group gap="lg" justify="space-between" style={{ flex: 1 }}>
            <Button
              component={Link}
              href={routes.home()}
              variant="transparent"
              style={{
                color: "var(--mantine-body-color)",
              }}
              p={0}
            >
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
            </Button>

            {!isMobile && (
              <Group mx="auto" gap={6} visibleFrom="sm">
                {data.map((item) => (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    color="gray"
                    variant={pathname === item.href ? "light" : "subtle"}
                    leftSection={
                      <Indicator
                        inline
                        label={item.indicator?.label}
                        color={item.indicator?.color}
                        disabled={!item.indicator}
                        size={16}
                        radius="xl"
                        styles={{ indicator: { top: 4 } }}
                      >
                        <item.icon size={24} />
                      </Indicator>
                    }
                    styles={{
                      root: {
                        color: "var(--mantine-body-color)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Group>
            )}
            <Tooltip
              label="Настройки"
              position="bottom"
              events={{ focus: true, hover: false, touch: false }}
              arrowSize={8}
            >
              <ActionIcon
                size="lg"
                radius="xl"
                variant="transparent"
                component={Link}
                href={routes.settings()}
                aria-label="Настройки"
              >
                <Avatar
                  name={currentUser.username}
                  color="initials"
                  variant="filled"
                />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </AppShell.Header>

      {isMobile && (
        <AppShell.Navbar py="xs" px={8}>
          <Stack gap={4}>
            {data.map((item) => (
              <NavLink
                key={item.href}
                component={Link}
                leftSection={
                  <Indicator
                    inline
                    label={item.indicator?.label}
                    color={item.indicator?.color}
                    disabled={!item.indicator}
                    size={16}
                    radius="xl"
                    ms={2}
                    display="flex"
                    styles={{ indicator: { top: 4 } }}
                  >
                    <item.icon size={24} />
                  </Indicator>
                }
                label={item.label}
                href={item.href}
                fw={500}
                active={pathname === item.href}
                styles={{
                  root: { borderRadius: "var(--mantine-radius-md)" },
                  section: { marginRight: 8 },
                }}
                px={8}
              />
            ))}
          </Stack>
        </AppShell.Navbar>
      )}

      <AppShell.Main px="md" maw="48rem" mx="auto">
        <Stack py="lg">{children}</Stack>
      </AppShell.Main>
    </AppShell>
  );
};
