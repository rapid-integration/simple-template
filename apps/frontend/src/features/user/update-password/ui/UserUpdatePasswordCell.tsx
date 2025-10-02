"use client";

import {
  ActionIcon,
  Drawer,
  Flex,
  Modal,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { TbPencil } from "react-icons/tb";

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
          <ActionIcon
            size="input-sm"
            color="gray"
            variant="subtle"
            onClick={open}
          >
            <TbPencil size={24} />
          </ActionIcon>
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
