"use client";

import { ActionIcon, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiMiniPencilSquare } from "react-icons/hi2";

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
            arrowSize={8}
          >
            <ActionIcon size="input-sm" variant="default" onClick={open}>
              <HiMiniPencilSquare size={24} />
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
        <Text c="dimmed" fz="sm" mb="xs">
          Вы можете выбрать публичное имя пользователя. Другие пользователи
          смогут найти Вас по такому имени.
        </Text>

        <UserUpdateUsernameForm
          initialValues={{ username }}
          onSuccess={close}
          onCancel={close}
        />
      </Popup>
    </>
  );
};
