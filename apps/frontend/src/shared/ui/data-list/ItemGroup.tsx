import { FC } from "react";
import variants from "./ItemGroup.variants";
import useDataListContext from "./context";

export type DataListItemGroupProps = React.ComponentProps<"div">;

const DataListItemGroup: FC<DataListItemGroupProps> = ({
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
