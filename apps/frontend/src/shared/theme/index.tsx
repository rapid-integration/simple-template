"use client";

import {
  Card,
  CloseButton,
  createTheme,
  DEFAULT_THEME,
  Drawer,
  Input,
  Modal,
  Notification,
  PasswordInput,
  TextInput,
  Tooltip,
} from "@mantine/core";
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
    Card: Card.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        events: { hover: true, focus: true, touch: false },
        withArrow: true,
      },
    }),
    CloseButton: CloseButton.extend({
      defaultProps: {
        icon: <HiMiniXMark size={24} />,
      },
    }),
    Notification: Notification.extend({
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
    }),
    InputError: Input.Error.extend({
      defaultProps: {
        fw: 500,
        mt: 4,
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        inputWrapperOrder: ["label", "input", "description", "error"],
      },
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: {
        visibilityToggleIcon: VisibilityToggleIcon,
      },
    }),
    ModalRoot: Modal.Root.extend({
      defaultProps: {
        centered: true,
      },
    }),
    ModalContent: Modal.Content.extend({
      defaultProps: {
        radius: "lg",
      },
    }),
    ModalTitle: Modal.Title.extend({
      defaultProps: {
        fw: 600,
        fz: "lg",
      },
    }),
    DrawerTitle: Drawer.Title.extend({
      defaultProps: {
        fw: 600,
        fz: "lg",
      },
    }),
  },
});
