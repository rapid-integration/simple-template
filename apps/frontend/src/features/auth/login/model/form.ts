"use client";

import { useForm, UseFormInput } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";

import { LoginFormSchema } from "./schema";
import { LoginFormValues } from "./types";
import { login } from "../api/actions";

export type UseLoginFormProps = UseFormInput<LoginFormValues> & {
  onUnauthorized?: VoidFunction;
};

export const useLoginForm = ({
  mode = "uncontrolled",
  initialValues = { username: "", password: "" },
  validateInputOnChange = true,
  onUnauthorized,
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
      onUnauthorized?.();

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
