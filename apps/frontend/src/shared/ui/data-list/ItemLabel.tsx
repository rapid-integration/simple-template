import { FC } from "react";
import variants from "./ItemLabel.variants";
import useDataListContext from "./context";

export type DataListItemLabelProps = React.ComponentProps<"dt">;

const DataListItemLabel: FC<DataListItemLabelProps> = ({
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
