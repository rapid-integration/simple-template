"use client";

import { useForm, UseFormInput } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { useEffect } from "react";

import { RegisterFormSchema } from "./schema";
import { RegisterFormValues } from "./types";
import { register } from "../api/actions";

export type UseRegisterFormProps = UseFormInput<RegisterFormValues>;

export const useRegisterForm = ({
  initialValues = { username: "", password1: "", password2: "" },
  validateInputOnChange = true,
  ...props
}: UseRegisterFormProps = {}) => {
  const form = useForm<RegisterFormValues>({
    initialValues,
    validate: zod4Resolver(RegisterFormSchema),
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

      const node = form.getInputNode("username");

      if (node instanceof HTMLInputElement) {
        node.focus();
        node.select();
      }

      return;
    }
  });

  useEffect(() => {
    if (form.isDirty("password2")) {
      form.validateField("password2");
    }
  }, [form.values.password1]);

  useEffect(() => {
    if (form.isDirty("password1")) {
      form.validateField("password1");
    }
  }, [form.values.password2]);

  return [form, submit] as const;
};
