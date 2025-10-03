"use client";

import { Button, Flex, Group, Stack, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import {
  useUserUpdateUsernameForm,
  UseUserUpdateUsernameFormProps,
} from "../model/form";

export type UserUpdateUsernameFormProps = UseUserUpdateUsernameFormProps;

export const UserUpdateUsernameForm: React.FC<UserUpdateUsernameFormProps> = ({
  onSuccess,
  ...props
}) => {
  const [form, submit] = useUserUpdateUsernameForm({
    ...props,
    onSuccess: () => {
      onSuccess?.();
      notifications.show({
        color: "green",
        message: "Имя пользователя было успешно обновлено!",
      });
    },
  });

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
        <TextInput
          key={form.key("username")}
          {...form.getInputProps("username")}
          id="user-update-username-form-username-input"
          label="Новое имя пользователя"
          placeholder="Введите новое имя пользователя…"
          autoComplete="username"
          data-autofocus
        />
      </Stack>

      <Group mt="md">
        <Button
          type="submit"
          loading={form.submitting}
          disabled={!form.isDirty()}
          fullWidth
        >
          Сохранить
        </Button>
      </Group>
    </Flex>
  );
};
