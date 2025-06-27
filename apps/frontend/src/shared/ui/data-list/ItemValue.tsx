"use client";

import { FC } from "react";

import variants from "./ItemValue.variants";

export type DataListItemValueProps = React.ComponentProps<"dd">;

const DataListItemValue: FC<DataListItemValueProps> = ({
  className,
  ...props
}) => {
  return <dd className={variants({ className })} {...props} />;
};

DataListItemValue.displayName = "DataList.ItemValue";

export default DataListItemValue;
