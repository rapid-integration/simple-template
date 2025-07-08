import { AtSignIcon } from "lucide-react";
import { ComponentProps, FunctionComponent, ReactNode } from "react";

import DataList from "@/shared/ui/data-list";

interface UserUsernameDataListItemProps
  extends ComponentProps<typeof DataList.Item> {
  value: string;
  action?: ReactNode;
}

const UserUsernameDataListItem: FunctionComponent<
  UserUsernameDataListItemProps
> = ({ value, action, ...otherProps }) => {
  return (
    <DataList.Item {...otherProps}>
      <AtSignIcon className="me-1" />
      <DataList.ItemGroup>
        <DataList.ItemLabel>Имя пользователя</DataList.ItemLabel>
        <DataList.ItemValue>{value}</DataList.ItemValue>
      </DataList.ItemGroup>
      {action}
    </DataList.Item>
  );
};

export default UserUsernameDataListItem;
