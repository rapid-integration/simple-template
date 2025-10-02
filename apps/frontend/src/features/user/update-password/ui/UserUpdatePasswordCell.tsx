"use client";

import {
  ActionIcon,
  Drawer,
  Flex,
  Modal,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { TbEdit } from "react-icons/tb";

import { UserPasswordCell, UserPasswordCellProps } from "@/entities/user";

import { UserUpdatePasswordForm } from "./UserUpdatePasswordForm";

export type UserUpdatePasswordCellProps = UserPasswordCellProps;

export const UserUpdatePasswordCell: React.FC<UserUpdatePasswordCellProps> = (
  props,
) => {
  const [opened, { open, close }] = useDisclosure(false);

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const Popup = isMobile ? Drawer : Modal;

  return (
    <>
      <UserPasswordCell
        rightSection={
          <Tooltip
            label="Изменить пароль"
            position="left"
            withArrow
            arrowSize={8}
          >
            <ActionIcon
              size="input-sm"
              style={{ color: "var(--mantine-color-gray-text)" }}
              variant="default"
              onClick={open}
            >
              <TbEdit size={24} />
            </ActionIcon>
          </Tooltip>
        }
        {...props}
      />

      <Popup.Root
        position="bottom"
        opened={opened}
        onClose={close}
        centered={isMobile ? undefined : true}
      >
        <Popup.Overlay />
        <Popup.Content display="flex">
          <Flex flex={1} direction="column">
            <Popup.Header>
              <Popup.Title fw={500}>Изменение пароля</Popup.Title>
              <Popup.CloseButton aria-label="Закрыть" />
            </Popup.Header>
            <Popup.Body display="flex" flex={1}>
              <UserUpdatePasswordForm onSuccess={close} />
            </Popup.Body>
          </Flex>
        </Popup.Content>
      </Popup.Root>
    </>
  );
};
