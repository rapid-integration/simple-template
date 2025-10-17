"use client";

import { createTheme, DEFAULT_THEME } from "@mantine/core";
import { HiMiniXMark } from "react-icons/hi2";

import { VisibilityToggleIcon } from "../ui/VisibilityToggleIcon";

export default createTheme({
  primaryColor: "violet",
  fontFamily: `var(--font-inter), ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `var(--font-mono), ${DEFAULT_THEME.fontFamilyMonospace}`,
  headings: {
    fontFamily: `var(--font-inter), ${DEFAULT_THEME.headings.fontFamily}`,
    textWrap: "balance",
  },
  defaultRadius: "md",
  respectReducedMotion: true,
  components: {
    Notification: {
      defaultProps: {
        ps: "sm",
        fw: 500,
        styles: {
          icon: {
            marginRight: "var(--mantine-spacing-xs)",
          },
        },
        withBorder: true,
        withCloseButton: false,
      },
    },
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
        fw: 600,
        fz: "lg",
      },
    },
    DrawerTitle: {
      defaultProps: {
        fw: 600,
        fz: "lg",
      },
    },
    Tooltip: {
      defaultProps: {
        events: { hover: true, focus: true, touch: false },
        withArrow: true,
      },
    },
    TextInput: {
      defaultProps: {
        inputWrapperOrder: ["label", "input", "description", "error"],
      },
    },
    InputError: {
      defaultProps: {
        fw: 500,
        mt: 4,
      },
    },
    CloseButton: {
      defaultProps: {
        icon: <HiMiniXMark size={24} />,
      },
    },
    PasswordInput: {
      defaultProps: {
        visibilityToggleIcon: VisibilityToggleIcon,
      },
    },
  },
});
