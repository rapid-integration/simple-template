"use client";

import { ThemeIcon } from "@mantine/core";
import { HiMiniKey } from "react-icons/hi2";

import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserPasswordCellProps = CellProps;

export const UserPasswordCell: React.FC<UserPasswordCellProps> = (props) => {
  return (
    <Cell
      leftSection={
        <ThemeIcon variant="transparent">
          <HiMiniKey size={24} />
        </ThemeIcon>
      }
      label="Пароль"
      value={"*".repeat(8)}
      {...props}
    />
  );
};
