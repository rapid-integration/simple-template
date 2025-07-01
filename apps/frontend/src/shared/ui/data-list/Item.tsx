"use client";

import { ComponentProps, FunctionComponent } from "react";

import useDataListContext from "./context";
import variants from "./Item.variants";

export type DataListItemProps = ComponentProps<"div">;

const DataListItem: FunctionComponent<DataListItemProps> = ({
  className,
  ...props
}) => {
  const { orientation } = useDataListContext();

  return <div className={variants({ className, orientation })} {...props} />;
};

DataListItem.displayName = "DataList.Item";

export default DataListItem;
