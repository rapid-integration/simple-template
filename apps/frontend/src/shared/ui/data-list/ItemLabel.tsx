"use client";

import { FunctionComponent } from "react";

import useDataListContext from "./context";
import variants from "./ItemLabel.variants";

export type DataListItemLabelProps = React.ComponentProps<"dt">;

const DataListItemLabel: FunctionComponent<DataListItemLabelProps> = ({
  className,
  ...otherProps
}) => {
  const { orientation } = useDataListContext();

  return (
    <dt className={variants({ className, orientation })} {...otherProps} />
  );
};

DataListItemLabel.displayName = "DataList.ItemLabel";

export default DataListItemLabel;
