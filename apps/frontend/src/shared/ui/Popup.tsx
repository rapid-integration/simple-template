import {
  Drawer,
  DrawerProps,
  Modal,
  ModalProps,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export type PopupProps = ModalProps & DrawerProps;

export const Popup: React.FC<PopupProps> = (props) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const Popup = isMobile ? Drawer : Modal;

  return <Popup {...props} />;
};
