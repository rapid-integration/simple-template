"use client";

import { ThemeIcon } from "@mantine/core";
import { TbKey } from "react-icons/tb";

import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserPasswordCellProps = CellProps;

export const UserPasswordCell: React.FC<UserPasswordCellProps> = (props) => {
  return (
    <Cell
      leftSection={
        <ThemeIcon color="blue" variant="transparent">
          <TbKey size={24} />
        </ThemeIcon>
      }
      label="Пароль"
      value={"*".repeat(8)}
      {...props}
    />
  );
};
