import { TbKey } from "react-icons/tb";

import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserPasswordCellProps = CellProps;

export const UserPasswordCell: React.FC<UserPasswordCellProps> = (props) => {
  return (
    <Cell
      leftSection={<TbKey size={24} />}
      label="Пароль"
      value={"*".repeat(8)}
      {...props}
    />
  );
};
