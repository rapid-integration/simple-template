import { createTheme } from "@mantine/core";

export default createTheme({
  defaultRadius: "md",
  components: {
    Modal: {
      defaultProps: {
        transitionProps: {
          duration: 150,
          transition: "pop",
        },
      },
    },
    ModalRoot: {
      defaultProps: {
        centered: true,
      },
    },
    ModalTitle: {
      defaultProps: {
        fw: 500,
      },
    },
    ModalCloseButton: {
      defaultProps: {
        "aria-label": "Закрыть",
      },
    },
    DrawerRoot: {
      defaultProps: {
        position: "bottom",
      },
    },
    DrawerTitle: {
      defaultProps: {
        fw: 500,
      },
    },
    DrawerContent: {
      defaultProps: {
        w: "100%",
        display: "flex",
        flex: 2 / 3,
        style: {
          flexDirection: "column",
          marginTop: "auto",
          borderTopLeftRadius: "var(--mantine-radius-lg)",
          borderTopRightRadius: "var(--mantine-radius-lg)",
        },
      },
    },
    DrawerBody: {
      defaultProps: {
        flex: 1,
        display: "flex",
      },
    },
    DrawerCloseButton: {
      defaultProps: {
        "aria-label": "Закрыть",
      },
    },
  },
});
