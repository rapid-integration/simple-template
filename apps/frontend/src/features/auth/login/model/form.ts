"use client";

import { useForm, UseFormInput } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { zod4Resolver } from "mantine-form-zod-resolver";

import { LoginFormSchema } from "./schema";
import { LoginFormValues } from "./types";
import { login } from "../api/actions";

export type UseLoginFormProps = UseFormInput<LoginFormValues>;

export const useLoginForm = ({
  mode = "uncontrolled",
  initialValues = { username: "", password: "" },
  validateInputOnChange = true,
  ...props
}: UseLoginFormProps = {}) => {
  const form = useForm<LoginFormValues>({
    mode,
    initialValues,
    validate: zod4Resolver(LoginFormSchema),
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

      const node = form.getInputNode("username");

      if (node instanceof HTMLInputElement) {
        node.focus();
        node.select();
      }

      return;
    }
  });

  return [form, submit] as const;
};
