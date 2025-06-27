import useContext, {
  type DataListContextValue as ContextValue,
} from "./context";
import Item, { type DataListItemProps as ItemProps } from "./Item";
import itemVariants from "./Item.variants";
import ItemDescription, {
  type DataListItemDescriptionProps as ItemDescriptionProps,
} from "./ItemDescription";
import itemDescriptionVariants from "./ItemDescription.variants";
import ItemGroup, {
  type DataListItemGroupProps as ItemGroupProps,
} from "./ItemGroup";
import itemGroupVariants from "./ItemGroup.variants";
import ItemLabel, {
  type DataListItemLabelProps as ItemLabelProps,
} from "./ItemLabel";
import itemLabelVariants from "./ItemLabel.variants";
import ItemValue, {
  type DataListItemValueProps as ItemValueProps,
} from "./ItemValue";
import itemValueVariants from "./ItemValue.variants";
import Root, {
  type DataListRootProps as RootProps,
  type DataListRootVariantProps as RootVariantProps,
} from "./Root";
import rootVariants from "./Root.variants";

export type {
  ContextValue,
  ItemDescriptionProps,
  ItemGroupProps,
  ItemLabelProps,
  ItemProps,
  ItemValueProps,
  RootProps,
  RootVariantProps,
};

export {
  Item,
  ItemDescription,
  itemDescriptionVariants,
  ItemGroup,
  itemGroupVariants,
  ItemLabel,
  itemLabelVariants,
  ItemValue,
  itemValueVariants,
  itemVariants,
  Root,
  rootVariants,
};

const DataList = Object.assign(Root, {
  Item,
  ItemDescription,
  ItemGroup,
  ItemLabel,
  ItemValue,
  useContext,
});

export default DataList;
