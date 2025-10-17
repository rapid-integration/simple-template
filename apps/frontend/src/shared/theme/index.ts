import { createTheme, DEFAULT_THEME } from "@mantine/core";

export default createTheme({
  fontFamily: `var(--font-inter), ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `var(--font-mono), ${DEFAULT_THEME.fontFamilyMonospace}`,
  headings: {
    fontFamily: `var(--font-inter), ${DEFAULT_THEME.headings.fontFamily}`,
    textWrap: "balance",
  },
  defaultRadius: "md",
  respectReducedMotion: true,
  components: {
    Card: {
      defaultProps: {
        withBorder: true,
      },
    },
    Modal: {
      defaultProps: {
        radius: "lg",
      },
    },
    ModalContent: {
      defaultProps: {
        radius: "lg",
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
    DrawerTitle: {
      defaultProps: {
        fw: 500,
      },
    },
    Tooltip: {
      defaultProps: {
        events: { hover: true, focus: true, touch: false },
      },
    },
  },
});
