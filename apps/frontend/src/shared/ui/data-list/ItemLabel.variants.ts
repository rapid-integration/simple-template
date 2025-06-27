import { cva } from "class-variance-authority";

const dataListItemLabelVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "me-auto",
      vertical: "",
    },
  },
});

export default dataListItemLabelVariants;
