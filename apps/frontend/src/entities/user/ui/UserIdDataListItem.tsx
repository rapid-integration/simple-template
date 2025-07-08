import { HashIcon } from "lucide-react";
import { ComponentProps, FunctionComponent, ReactNode } from "react";

import DataList from "@/shared/ui/data-list";

interface UserIdDataListItemProps extends ComponentProps<typeof DataList.Item> {
  value: string;
  action?: ReactNode;
}

const UserIdDataListItem: FunctionComponent<UserIdDataListItemProps> = ({
  value,
  action,
  ...otherProps
}) => {
  return (
    <DataList.Item {...otherProps}>
      <HashIcon className="me-1" />
      <DataList.ItemGroup className="overflow-hidden">
        <DataList.ItemLabel>Идентификатор</DataList.ItemLabel>
        <DataList.ItemValue className="truncate font-mono">
          {value}
        </DataList.ItemValue>
      </DataList.ItemGroup>
      {action}
    </DataList.Item>
  );
};

export default UserIdDataListItem;
