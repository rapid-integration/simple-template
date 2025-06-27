import { VariantProps } from "class-variance-authority";
import { ComponentProps, FunctionComponent } from "react";

import variants from "./Content.variants";

export type PageContentVariantProps = VariantProps<typeof variants>;
export interface PageContentProps
  extends PageContentVariantProps,
    ComponentProps<"div"> {}

const PageContent: FunctionComponent<PageContentProps> = ({
  size,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={variants({
        size,
        className,
      })}
      {...otherProps}
    />
  );
};

export default PageContent;
