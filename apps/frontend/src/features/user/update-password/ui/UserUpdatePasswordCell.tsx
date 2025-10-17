"use client";

import { ActionIcon, Tooltip, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiMiniPencilSquare } from "react-icons/hi2";

import { UserPasswordCell, UserPasswordCellProps } from "@/entities/user";
import { Popup } from "@/shared/ui/Popup";

import { UserUpdatePasswordForm } from "./UserUpdatePasswordForm";

export type UserUpdatePasswordCellProps = UserPasswordCellProps;

export const UserUpdatePasswordCell: React.FC<UserUpdatePasswordCellProps> = (
  props,
) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <UserPasswordCell
        rightSection={
          <Tooltip label="Изменить пароль" position="left" arrowSize={8}>
            <ActionIcon size="input-sm" variant="default" onClick={open}>
              <HiMiniPencilSquare size={24} />
            </ActionIcon>
          </Tooltip>
        }
        {...props}
      />

      <Popup opened={opened} onClose={close} title="Изменение пароля">
        <Text c="dimmed" fz="sm" mb="xs">
          Вы можете изменить пароль от своего аккаунта. Изменение пароля не
          затронет сессии на других устройствах.
        </Text>

        <UserUpdatePasswordForm onSuccess={close} onCancel={close} />
      </Popup>
    </>
  );
};
