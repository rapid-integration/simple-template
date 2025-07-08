import { KeyIcon } from "lucide-react";
import { ComponentProps, FunctionComponent, ReactNode } from "react";

import DataList from "@/shared/ui/data-list";

interface UserPasswordDataListItemProps
  extends ComponentProps<typeof DataList.Item> {
  action?: ReactNode;
}

const UserPasswordDataListItem: FunctionComponent<
  UserPasswordDataListItemProps
> = ({ action, ...otherProps }) => {
  return (
    <DataList.Item {...otherProps}>
      <KeyIcon className="me-1" />
      <DataList.ItemGroup>
        <DataList.ItemLabel>Пароль</DataList.ItemLabel>
        <DataList.ItemValue>********</DataList.ItemValue>
      </DataList.ItemGroup>
      {action}
    </DataList.Item>
  );
};

export default UserPasswordDataListItem;
