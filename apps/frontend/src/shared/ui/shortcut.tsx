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
          className="bg-accent/25 inline-flex size-4 items-center justify-center rounded leading-none"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
};

export default Shortcut;
