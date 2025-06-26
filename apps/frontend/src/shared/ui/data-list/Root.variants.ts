import { cva } from "class-variance-authority";

const dataListRootVariants = cva(
  "w-full bg-card text-card-foreground flex flex-col rounded-md shadow-xs border",
  {
    variants: {
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
      divide: {
        true: "divide-y-border divide-y",
      },
      orientation: {
        horizontal: "flex flex-col justify-between",
        vertical: "flex flex-col",
      },
    },
    defaultVariants: {
      size: "default",
      divide: true,
      orientation: "horizontal",
    },
  }
);

export default dataListRootVariants;
