import { KeyIcon } from "lucide-react";

import Cell from "@/shared/ui/Cell";

export interface UserPasswordCellProps
  extends React.ComponentProps<typeof Cell> {}

const UserPasswordCell: React.FunctionComponent<UserPasswordCellProps> = (
  props,
) => {
  return (
    <Cell
      before={<KeyIcon />}
      label="Пароль"
      description={"*".repeat(8)}
      {...props}
    />
  );
};

export default UserPasswordCell;
