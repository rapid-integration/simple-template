"use client";

import { ActionIcon, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TbEdit } from "react-icons/tb";

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

      <Popup opened={opened} onClose={close} title="Изменение пароля">
        <UserUpdatePasswordForm onSuccess={close} />
      </Popup>
    </>
  );
};
