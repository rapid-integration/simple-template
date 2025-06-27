"use client";

import { ComponentProps, FunctionComponent } from "react";

import { useScrolled } from "@/shared/hooks/use-scrolled";
import { cn } from "@/shared/lib/utils";

export interface BarCenterProps extends ComponentProps<"div"> {
  showAfterScrolled?: boolean;
}

const BarCenter: FunctionComponent<BarCenterProps> = ({
  showAfterScrolled,
  className,
  ...otherProps
}) => {
  const scrolled = useScrolled();

  return (
    <div
      className={cn(
        "absolute left-1/2 -translate-x-1/2",
        showAfterScrolled && "opacity-0 transition-opacity",
        showAfterScrolled && scrolled && "opacity-100",
        className,
      )}
      {...otherProps}
    />
  );
};

export default BarCenter;
