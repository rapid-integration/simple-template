import { VariantProps } from "class-variance-authority";
import { ComponentProps, FC } from "react";

import { DataListContext } from "./context";
import variants from "./Root.variants";

export type DataListRootVariantProps = VariantProps<typeof variants>;

export type DataListRootProps = DataListRootVariantProps & ComponentProps<"dl">;

const DataListRoot: FC<DataListRootProps> = ({
  className,
  size,
  divide,
  orientation = "horizontal",
  ...props
}) => {
  return (
    <DataListContext.Provider
      value={{ orientation: orientation || "horizontal" }}
    >
      <dl
        className={variants({ className, orientation, divide, size })}
        {...props}
      />
    </DataListContext.Provider>
  );
};

DataListRoot.displayName = "DataList.Root";

export default DataListRoot;
