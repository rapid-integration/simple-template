import { createTheme, DEFAULT_THEME } from "@mantine/core";

export default createTheme({
  fontFamily: `var(--font-inter), ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: DEFAULT_THEME.fontFamilyMonospace,
  headings: {
    fontFamily: `var(--font-inter), ${DEFAULT_THEME.headings.fontFamily}`,
  },
  defaultRadius: "md",
  respectReducedMotion: true,
  components: {
    Modal: {
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
