"use client";

import { Button, Flex, PasswordInput, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { HiMiniCheck } from "react-icons/hi2";

import {
  useUserUpdatePasswordForm,
  UseUserUpdatePasswordFormProps,
} from "../model/form";

export type UserUpdatePasswordFormProps = UseUserUpdatePasswordFormProps & {
  onCancel?: VoidFunction;
};

export const UserUpdatePasswordForm: React.FC<UserUpdatePasswordFormProps> = ({
  onSuccess,
  onCancel,
  ...props
}) => {
  const [form, submit] = useUserUpdatePasswordForm({
    onSuccess: () => {
      onSuccess?.();
      notifications.show({
        icon: <HiMiniCheck size={20} strokeWidth={1} />,
        color: "green",
        message: "Пароль обновлён!",
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

      <Flex gap="xs" direction={{ base: "column", sm: "row-reverse" }} mt="md">
        <Button type="submit" loading={form.submitting} fullWidth>
          Сохранить
        </Button>
        <Button
          variant="default"
          disabled={form.submitting}
          onClick={onCancel}
          fullWidth
        >
          Отмена
        </Button>
      </Flex>
    </Flex>
  );
};
