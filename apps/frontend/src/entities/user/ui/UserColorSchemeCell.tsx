"use client";

import {
  Box,
  Center,
  MantineColor,
  MantineColorScheme,
  SegmentedControl,
  Skeleton,
  ThemeIcon,
  useMantineColorScheme,
  useMantineTheme,
  VisuallyHidden,
} from "@mantine/core";
import { useMediaQuery, useMounted } from "@mantine/hooks";
import {
  HiMiniComputerDesktop,
  HiMiniMoon,
  HiMiniSun,
  HiMiniSwatch,
} from "react-icons/hi2";
import { IconType } from "react-icons/lib";

import { Cell, CellProps } from "@/shared/ui/Cell";
import { Kbds } from "@/shared/ui/Kbds";

import classNames from "./UserColorSchemeCell.module.css";

type Item = {
  icon: IconType;
  value: MantineColorScheme;
  label: React.ReactNode;
  color: MantineColor;
};

const data: Item[] = [
  {
    icon: HiMiniSun,
    value: "light",
    label: "Светлая",
    color: "yellow",
  },
  {
    icon: HiMiniMoon,
    value: "dark",
    label: "Тёмная",
    color: "cyan",
  },
  {
    icon: HiMiniComputerDesktop,
    value: "auto",
    label: "Автоматически",
    color: "currentColor",
  },
];

export type UserColorSchemeCellProps = CellProps;

export const UserColorSchemeCell: React.FC<UserColorSchemeCellProps> = (
  props,
) => {
  const mounted = useMounted();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Cell
      leftSection={
        <ThemeIcon
          size="lg"
          variant="gradient"
          gradient={{ from: theme.colors.pink[6], to: theme.colors.pink[4] }}
        >
          <HiMiniSwatch size={24} />
        </ThemeIcon>
      }
      label="Тема"
      value={!isMobile && <Kbds keys={["mod", "J"]} />}
      rightSection={
        mounted ? (
          <SegmentedControl
            data={data.map((item) => ({
              value: item.value,
              label: (
                <Center>
                  <ThemeIcon size={22} color={item.color} variant="transparent">
                    <item.icon size={22} />
                  </ThemeIcon>
                  {isMobile ? (
                    <VisuallyHidden>{item.label}</VisuallyHidden>
                  ) : (
                    <Box ms={4}>{item.label}</Box>
                  )}
                </Center>
              ),
            }))}
            value={colorScheme}
            onChange={(value) => setColorScheme(value as MantineColorScheme)}
            classNames={classNames}
          />
        ) : (
          <Skeleton width={isMobile ? 158 : 386.22} height={36} />
        )
      }
      {...props}
    />
  );
};
