"use client";

import { Button, Group, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { useRegisterForm } from "../model/form";

export function RegisterForm() {
  const [form, submit] = useRegisterForm();
  const [showPasswords, { toggle: toggleShowPasswords }] = useDisclosure();

  return (
    <form onSubmit={submit} className="flex flex-col">
      <Stack gap="xs">
        <TextInput
          {...form.getInputProps("username")}
          key={form.key("username")}
          id="register-form-username-input"
          label="Имя пользователя"
          placeholder="Введите имя пользователя…"
          autoComplete="username"
        />

        <PasswordInput
          {...form.getInputProps("password1")}
          key={form.key("password1")}
          id="register-form-password1-input"
          label="Пароль"
          placeholder="Введите пароль…"
          autoComplete="new-password"
          visible={showPasswords}
          onVisibilityChange={toggleShowPasswords}
        />

        <PasswordInput
          {...form.getInputProps("password2")}
          key={form.key("password2")}
          id="register-form-password2-input"
          label="Подтверждение пароля"
          placeholder="Введите пароль ещё раз…"
          autoComplete="new-password"
          visible={showPasswords}
          onVisibilityChange={toggleShowPasswords}
        />
      </Stack>

      <Group mt="md">
        <Button type="submit" loading={form.submitting} fullWidth>
          Создать аккаунт
        </Button>
      </Group>
    </form>
  );
}
