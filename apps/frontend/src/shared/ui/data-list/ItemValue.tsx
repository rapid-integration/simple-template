"use client";

import { FunctionComponent } from "react";

import variants from "./ItemValue.variants";

export type DataListItemValueProps = React.ComponentProps<"dd">;

const DataListItemValue: FunctionComponent<DataListItemValueProps> = ({
  className,
  ...props
}) => {
  return <dd className={variants({ className })} {...props} />;
};

DataListItemValue.displayName = "DataList.ItemValue";

export default DataListItemValue;
