import { ComponentProps } from "react";
import { cn } from "../lib/utils";

const Shortcut = ({
  className,
  sequence,
  ...otherProps
}: ComponentProps<"div"> & { sequence: string[] }) => {
  return (
    <div className={cn("inline-flex gap-1", className)} {...otherProps}>
      {sequence.map((key) => (
        <kbd
          key={key}
          className="rounded bg-accent/25 size-4 inline-flex leading-none items-center justify-center"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
};

export default Shortcut;
