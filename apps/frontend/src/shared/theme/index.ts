import { createTheme } from "@mantine/core";

export default createTheme({
  defaultRadius: "md",
  components: {
    Tooltip: {
      defaultProps: {
        events: { hover: true, focus: true, touch: false },
      },
    },
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
    DrawerTitle: {
      defaultProps: {
        fw: 500,
      },
    },
    DrawerCloseButton: {
      defaultProps: {
        "aria-label": "Закрыть",
      },
    },
  },
});
