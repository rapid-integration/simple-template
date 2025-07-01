"use client";

import { FunctionComponent } from "react";

import useDataListContext from "./context";
import variants from "./ItemGroup.variants";

export type DataListItemGroupProps = React.ComponentProps<"div">;

const DataListItemGroup: FunctionComponent<DataListItemGroupProps> = ({
  className,
  ...otherProps
}) => {
  const { orientation } = useDataListContext();

  return (
    <div className={variants({ className, orientation })} {...otherProps} />
  );
};

DataListItemGroup.displayName = "DataList.ItemGroup";

export default DataListItemGroup;
