"use client";

import { Button, ButtonProps } from "@mantine/core";
import { useTransition } from "react";

import { logout } from "../api/actions";

export type LogoutButtonProps = ButtonProps;

export const LogoutButton: React.FC<LogoutButtonProps> = (props) => {
  const [pending, startTransition] = useTransition();

  const startLogout = () => {
    startTransition(logout);
  };

  return (
    <Button
      size="md"
      color="red"
      variant="light"
      loading={pending}
      onClick={startLogout}
      {...props}
    >
      Выйти
    </Button>
  );
};
