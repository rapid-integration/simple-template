"use client";

import { ActionIcon, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TbEdit } from "react-icons/tb";

import { UserUsernameCell, UserUsernameCellProps } from "@/entities/user";
import { Popup } from "@/shared/ui/Popup";

import { UserUpdateUsernameForm } from "./UserUpdateUsernameForm";

export type UserUpdateUsernameCellProps = UserUsernameCellProps;

export const UserUpdateUsernameCell: React.FC<UserUpdateUsernameCellProps> = ({
  value: username,
  ...props
}) => {
  const [opened, { open, close }] = useDisclosure(false);

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

      <Popup
        opened={opened}
        onClose={close}
        title="Изменение имени пользователя"
      >
        <UserUpdateUsernameForm
          initialValues={{ username }}
          onSuccess={close}
        />
      </Popup>
    </>
  );
};
