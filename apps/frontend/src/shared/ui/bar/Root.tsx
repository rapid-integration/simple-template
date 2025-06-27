"use client";

import { ComponentProps, FunctionComponent } from "react";

import { useScrolled } from "@/shared/hooks/use-scrolled";
import { cn } from "@/shared/lib/utils";

export interface BarRoot extends ComponentProps<"div"> {}

const BarRoot: FunctionComponent<BarRoot> = ({ className, ...otherProps }) => {
  const scrolled = useScrolled();

  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex h-13 w-full items-center justify-between border-b border-transparent bg-background/75 p-2 backdrop-blur-xl transition-colors md:text-sm",
        scrolled && "border-border",
        className,
      )}
      {...otherProps}
    />
  );
};

export default BarRoot;
