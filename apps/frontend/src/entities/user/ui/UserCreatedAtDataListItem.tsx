import { CalendarPlusIcon } from "lucide-react";
import { ComponentProps, FunctionComponent, ReactNode } from "react";

import useDateTimeFormat from "@/shared/hooks/use-date-time-format";
import DataList from "@/shared/ui/data-list";
import Skeleton from "@/shared/ui/skeleton";

interface UserCreatedAtDataListItemProps
  extends ComponentProps<typeof DataList.Item> {
  value: string;
  action?: ReactNode | ((value: string) => ReactNode);
}

const UserCreatedAtDataListItem: FunctionComponent<
  UserCreatedAtDataListItemProps
> = ({ value, action, ...otherProps }) => {
  const displayDate = useDateTimeFormat({
    date: value,
    format: "d MMMM yyyy HH:mm",
  });

  return (
    <DataList.Item {...otherProps}>
      <CalendarPlusIcon className="me-1" />
      <DataList.ItemGroup>
        <DataList.ItemLabel>Дата регистрации</DataList.ItemLabel>
        <DataList.ItemValue>
          {displayDate || <Skeleton className="h-6" />}
        </DataList.ItemValue>
      </DataList.ItemGroup>
      {typeof action === "function" ? action(displayDate || "") : action}
    </DataList.Item>
  );
};

export default UserCreatedAtDataListItem;
