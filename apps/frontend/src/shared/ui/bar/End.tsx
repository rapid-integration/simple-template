import { ComponentProps, FunctionComponent } from "react";

import { cn } from "@/shared/lib/utils";

export interface BarEndProps extends ComponentProps<"div"> {}

const BarEnd: FunctionComponent<BarEndProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <div
      className={cn("absolute right-2 flex items-center gap-1", className)}
      {...otherProps}
    />
  );
};

export default BarEnd;
