import { cva } from "class-variance-authority";

const dataListItemGroupVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "me-auto",
      vertical: "",
    },
  },
});

export default dataListItemGroupVariants;
