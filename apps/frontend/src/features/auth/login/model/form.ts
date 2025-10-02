"use client";

import { useForm, UseFormInput, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { LoginFormSchema } from "./schema";
import { LoginFormValues } from "./types";
import { login } from "../api/actions";

export type UseLoginFormProps = UseFormInput<LoginFormValues>;

export const useLoginForm = ({
  initialValues = { username: "", password: "" },
  validateInputOnChange = true,
  ...props
}: UseLoginFormProps = {}) => {
  const form = useForm<LoginFormValues>({
    initialValues,
    validate: zodResolver(LoginFormSchema),
    validateInputOnChange,
    ...props,
  });

  const submit = form.onSubmit(async (values) => {
    const response = await login({ ...values, scope: "" });

    if (response?.status === 401) {
      notifications.show({
        color: "red",
        message: "Введено неверное имя пользователя или пароль!",
      });

      const input = form.getInputNode("username");

      if (input instanceof HTMLInputElement) {
        input.focus();
        input.select();
      }
    }
  });

  return [form, submit] as const;
};
