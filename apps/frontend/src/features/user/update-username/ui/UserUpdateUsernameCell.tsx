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

import { UserUsernameCell, UserUsernameCellProps } from "@/entities/user";

import { UserUpdateUsernameForm } from "./UserUpdateUsernameForm";

export type UserUpdateUsernameCellProps = UserUsernameCellProps;

export const UserUpdateUsernameCell: React.FC<UserUpdateUsernameCellProps> = ({
  value: username,
  ...props
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const Popup = isMobile ? Drawer : Modal;

  return (
    <>
      <UserUsernameCell
        value={username}
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
              <Popup.Title fw={500}>
                Редактирование имени пользователя
              </Popup.Title>
              <Popup.CloseButton aria-label="Закрыть" />
            </Popup.Header>
            <Popup.Body display="flex" flex={1}>
              <UserUpdateUsernameForm
                initialValues={{ username }}
                onSuccess={close}
              />
            </Popup.Body>
          </Flex>
        </Popup.Content>
      </Popup.Root>
    </>
  );
};
