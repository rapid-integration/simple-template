"use client";

import { Button, Group, PasswordInput, Stack, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { HiMiniXMark } from "react-icons/hi2";

import { useLoginForm } from "../model/form";

export const LoginForm: React.FC = () => {
  const [form, submit] = useLoginForm({
    onUnauthorized: () => {
      notifications.show({
        icon: <HiMiniXMark size={20} strokeWidth={1} />,
        color: "red",
        message: "Неверное имя пользователя или пароль!",
      });
    },
  });

  return (
    <form onSubmit={submit}>
      <Stack gap="xs">
        <TextInput
          {...form.getInputProps("username")}
          key={form.key("username")}
          id="login-form-username-input"
          label="Имя пользователя"
          placeholder="Введите имя пользователя…"
          autoComplete="username"
        />

        <PasswordInput
          {...form.getInputProps("password")}
          key={form.key("password")}
          id="login-form-password-input"
          label="Пароль"
          placeholder="Введите пароль…"
          autoComplete="password"
        />
      </Stack>

      <Group mt="md">
        <Button type="submit" loading={form.submitting} fullWidth>
          Войти
        </Button>
      </Group>
    </form>
  );
};
