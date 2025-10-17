"use client";

import {
  Center,
  MantineColorScheme,
  SegmentedControl,
  Skeleton,
  ThemeIcon,
  useMantineColorScheme,
  VisuallyHidden,
} from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import {
  HiMiniComputerDesktop,
  HiMiniMoon,
  HiMiniSun,
  HiMiniSwatch,
} from "react-icons/hi2";

import { Cell, CellProps } from "@/shared/ui/Cell";

const data = [
  {
    value: "light",
    label: (
      <Center>
        <HiMiniSun size={24} />
        <VisuallyHidden>Светлая</VisuallyHidden>
      </Center>
    ),
  },
  {
    value: "dark",
    label: (
      <Center>
        <HiMiniMoon size={24} />
        <VisuallyHidden>Тёмная</VisuallyHidden>
      </Center>
    ),
  },
  {
    value: "auto",
    label: (
      <Center>
        <HiMiniComputerDesktop size={24} />
        <VisuallyHidden>Автоматически</VisuallyHidden>
      </Center>
    ),
  },
];

export type UserColorSchemeCellProps = CellProps;

export const UserColorSchemeCell: React.FC<UserColorSchemeCellProps> = (
  props,
) => {
  const mounted = useMounted();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Cell
      leftSection={
        <ThemeIcon variant="transparent">
          <HiMiniSwatch size={24} />
        </ThemeIcon>
      }
      label="Тема"
      rightSection={
        mounted ? (
          <SegmentedControl
            data={data}
            value={colorScheme}
            onChange={(value) => setColorScheme(value as MantineColorScheme)}
            withItemsBorders={false}
          />
        ) : (
          <Skeleton width={140} height={38} />
        )
      }
      {...props}
    />
  );
};
