"use client";

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

  return isMobile ? (
    <Drawer
      styles={{
        content: {
          display: "flex",
          flexDirection: "column",
          borderTopLeftRadius: "var(--mantine-radius-lg)",
          borderTopRightRadius: "var(--mantine-radius-lg)",
        },
        body: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
      size="75%"
      position="bottom"
      {...props}
    />
  ) : (
    <Modal {...props} />
  );
};
