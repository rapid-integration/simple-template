import { cva } from "class-variance-authority";

const dataListRootVariants = cva(
  "bg-card text-card-foreground shadow-xs flex w-full flex-col rounded-md border",
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
  },
);

export default dataListRootVariants;
