import { FC } from "react";
import variants from "./ItemDescription.variants";

export type DataListItemDescriptionProps = React.ComponentProps<"p">;

const DataListItemDescription: FC<DataListItemDescriptionProps> = ({
  className,
  ...props
}) => {
  return <p className={variants({ className })} {...props} />;
};

DataListItemDescription.displayName = "DataList.ItemDescription";

export default DataListItemDescription;
