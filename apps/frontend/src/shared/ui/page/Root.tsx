import { ComponentProps, FunctionComponent } from "react";

import { cn } from "@/shared/lib/utils";

export interface PageRootProps extends ComponentProps<"div"> {}

const PageRoot: FunctionComponent<PageRootProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <div
      className={cn("relative flex grow flex-col items-center", className)}
      {...otherProps}
    />
  );
};

export default PageRoot;
