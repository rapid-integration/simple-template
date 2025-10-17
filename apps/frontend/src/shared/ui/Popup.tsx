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
      size="75%"
      position="bottom"
      opacity={100}
      transitionProps={{
        duration: 500,
        transition: {
          in: { transform: "translateY(0)" },
          out: { transform: "translateY(100%)" },
          common: { transformOrigin: "bottom" },
          transitionProperty: "transform",
        },
        timingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
      }}
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
      {...props}
    />
  ) : (
    <Modal {...props} />
  );
};
