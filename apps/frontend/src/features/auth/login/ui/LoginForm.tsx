"use client";

import { PasswordInput, TextInput, Button, Group, Stack } from "@mantine/core";

import { useLoginForm } from "../model/form";

export function LoginForm() {
  const [form, submit] = useLoginForm();

  return (
    <form onSubmit={submit}>
      <Stack gap="xs">
        <TextInput
          {...form.getInputProps("username")}
          key={form.key("username")}
          label="Имя пользователя"
          placeholder="Введите имя пользователя…"
          autoComplete="username"
        />

        <PasswordInput
          {...form.getInputProps("password")}
          key={form.key("password")}
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
}
