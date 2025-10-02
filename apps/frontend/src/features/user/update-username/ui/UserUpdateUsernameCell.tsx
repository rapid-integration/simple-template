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
          <Tooltip
            label="Изменить имя пользователя"
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
              <Popup.Title fw={500}>Изменение имени пользователя</Popup.Title>
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
