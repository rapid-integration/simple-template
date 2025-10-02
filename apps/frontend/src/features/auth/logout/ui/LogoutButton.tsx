"use client";

import { Button, ButtonProps } from "@mantine/core";
import { useTransition } from "react";
import { TbLogout } from "react-icons/tb";

import { logout } from "../api/actions";

export type LogoutButtonProps = ButtonProps;

export const LogoutButton: React.FC<LogoutButtonProps> = (props) => {
  const [pending, startTransition] = useTransition();

  const startLogout = () => {
    startTransition(logout);
  };

  return (
    <Button
      color="red"
      variant="default"
      leftSection={<TbLogout size={20} />}
      style={{ color: "var(--mantine-color-red-text)" }}
      loading={pending}
      onClick={startLogout}
      {...props}
    >
      Выйти
    </Button>
  );
};
