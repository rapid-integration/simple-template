"use client";

import { Avatar, Button, Flex, Stack, TextInput, Tooltip } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { HiMiniCheck, HiMiniUser } from "react-icons/hi2";

import {
  useUserUpdateUsernameForm,
  UseUserUpdateUsernameFormProps,
} from "../model/form";

export type UserUpdateUsernameFormProps = UseUserUpdateUsernameFormProps & {
  onCancel?: VoidFunction;
};

export const UserUpdateUsernameForm: React.FC<UserUpdateUsernameFormProps> = ({
  onSuccess,
  onCancel,
  ...props
}) => {
  const [form, submit] = useUserUpdateUsernameForm({
    ...props,
    onSuccess: () => {
      onSuccess?.();
      notifications.show({
        icon: <HiMiniCheck size={20} strokeWidth={1} />,
        color: "green",
        message: "Имя пользователя обновлено!",
      });
    },
  });

  const [debouncedUsername] = useDebouncedValue(form.values.username, 300);

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
          leftSection={
            <Tooltip
              label="Предпросмотр аватара"
              position="bottom"
              arrowSize={8}
            >
              <Avatar
                size="sm"
                lh={0.5}
                name={debouncedUsername}
                color={debouncedUsername ? "initials" : undefined}
                variant="filled"
              >
                {!debouncedUsername && <HiMiniUser size={16} />}
              </Avatar>
            </Tooltip>
          }
          data-autofocus
        />
      </Stack>

      <Flex gap="xs" direction={{ base: "column", sm: "row-reverse" }} mt="md">
        <Button
          type="submit"
          loading={form.submitting}
          disabled={!form.isDirty()}
          fullWidth
        >
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
