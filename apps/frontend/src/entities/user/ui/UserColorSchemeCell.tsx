"use client";

import {
  MantineColorScheme,
  Select,
  Skeleton,
  ThemeIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import { TbBrush } from "react-icons/tb";

import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserColorSchemeCellProps = CellProps;

export const UserColorSchemeCell: React.FC<UserColorSchemeCellProps> = (
  props,
) => {
  const mounted = useMounted();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Cell
      leftSection={
        <ThemeIcon color="blue" variant="transparent">
          <TbBrush size={24} />
        </ThemeIcon>
      }
      label="Тема"
      rightSection={
        mounted ? (
          <Select
            w="10rem"
            data={[
              {
                label: "Светлая",
                value: "light",
              },
              {
                label: "Тёмная",
                value: "dark",
              },
              {
                label: "Как в системе",
                value: "auto",
              },
            ]}
            value={colorScheme}
            onChange={(value) => setColorScheme(value as MantineColorScheme)}
            allowDeselect={false}
            aria-label="Тема"
          />
        ) : (
          <Skeleton width="10rem" height={36} />
        )
      }
      {...props}
    />
  );
};
