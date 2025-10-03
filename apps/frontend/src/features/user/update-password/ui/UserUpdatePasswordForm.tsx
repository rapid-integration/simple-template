"use client";

import { Button, Flex, Group, PasswordInput, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import {
  useUserUpdatePasswordForm,
  UseUserUpdatePasswordFormProps,
} from "../model/form";

export type UserUpdatePasswordFormProps = UseUserUpdatePasswordFormProps;

export const UserUpdatePasswordForm: React.FC<UserUpdatePasswordFormProps> = ({
  onSuccess,
  ...props
}) => {
  const [form, submit] = useUserUpdatePasswordForm({
    onSuccess: () => {
      onSuccess?.();
      notifications.show({
        color: "green",
        message: "Пароль был успешно обновлён!",
      });
    },
    ...props,
  });

  const [showOldPasswords, { toggle: toggleShowOldPasswords }] =
    useDisclosure();

  return (
    <Flex
      component="form"
      flex={1}
      direction="column"
      onSubmit={(event) =>
        submit(event as unknown as React.FormEvent<HTMLFormElement>)
      }
    >
      <Stack gap="xs" mb="auto">
        <PasswordInput
          {...form.getInputProps("oldPassword")}
          key={form.key("oldPassword")}
          id="user-update-password-form-old-password-input"
          label="Старый пароль"
          placeholder="Введите старый пароль…"
          autoComplete="password"
          data-autofocus
        />

        <PasswordInput
          {...form.getInputProps("newPassword1")}
          key={form.key("newPassword1")}
          id="user-update-password-form-new-password1-input"
          label="Новый пароль"
          placeholder="Введите новый пароль…"
          autoComplete="new-password"
          visible={showOldPasswords}
          onVisibilityChange={toggleShowOldPasswords}
        />

        <PasswordInput
          {...form.getInputProps("newPassword2")}
          key={form.key("newPassword2")}
          id="user-update-password-form-new-password2-input"
          label="Подтверждение нового пароля"
          placeholder="Введите новый пароль ещё раз…"
          autoComplete="new-password"
          visible={showOldPasswords}
          onVisibilityChange={toggleShowOldPasswords}
        />
      </Stack>

      <Group mt="md">
        <Button type="submit" loading={form.submitting} fullWidth>
          Сохранить
        </Button>
      </Group>
    </Flex>
  );
};
