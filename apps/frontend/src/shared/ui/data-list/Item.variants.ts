import { cva } from "class-variance-authority";

const dataListItemVariants = cva(
  [
    "flex items-center gap-1 px-3 py-2.5",
    "[&_svg:not([class*='text-'])]:text-muted-foreground",
    "[&_svg:not([class*='size-'])]:size-5 [&_svg]:shrink-0",
  ],
  {
    variants: {
      orientation: {
        horizontal: "items-center gap-2",
        vertical: "flex-col items-start",
      },
    },
  },
);

export default dataListItemVariants;
