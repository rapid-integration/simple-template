"use client";

import { useForm, UseFormInput, zodResolver } from "@mantine/form";

import { RegisterFormSchema } from "./schema";
import { RegisterFormValues } from "./types";
import { register } from "../api/actions";

export type UseRegisterFormProps = UseFormInput<RegisterFormValues>;

export const useRegisterForm = ({
  initialValues = { username: "", password1: "", password2: "" },
  validateInputOnChange = true,
  ...props
}: UseRegisterFormProps = {}) => {
  const form = useForm({
    initialValues,
    validate: zodResolver(RegisterFormSchema),
    validateInputOnChange,
    ...props,
  });

  const submit = form.onSubmit(async (values) => {
    const response = await register({
      username: values.username,
      password: values.password1,
    });

    if (response?.status === 409) {
      form.setFieldError("username", "Это имя пользователя уже занято.");

      const input = form.getInputNode("username");

      if (input instanceof HTMLInputElement) {
        input.focus();
        input.select();
      }
    }
  });

  return [form, submit] as const;
};
