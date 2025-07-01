"use client";

import { FunctionComponent } from "react";

import variants from "./ItemDescription.variants";

export type DataListItemDescriptionProps = React.ComponentProps<"p">;

const DataListItemDescription: FunctionComponent<
  DataListItemDescriptionProps
> = ({ className, ...props }) => {
  return <p className={variants({ className })} {...props} />;
};

DataListItemDescription.displayName = "DataList.ItemDescription";

export default DataListItemDescription;
