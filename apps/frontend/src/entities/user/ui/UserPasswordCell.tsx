"use client";

import { ThemeIcon, useMantineTheme } from "@mantine/core";
import { HiMiniKey } from "react-icons/hi2";

import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserPasswordCellProps = CellProps;

export const UserPasswordCell: React.FC<UserPasswordCellProps> = (props) => {
  const theme = useMantineTheme();

  return (
    <Cell
      leftSection={
        <ThemeIcon
          size="lg"
          variant="gradient"
          gradient={{ from: theme.colors.dark[3], to: theme.colors.dark[1] }}
        >
          <HiMiniKey size={24} />
        </ThemeIcon>
      }
      label="Пароль"
      value={"*".repeat(8)}
      {...props}
    />
  );
};
