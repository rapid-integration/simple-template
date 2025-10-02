import { useForm, UseFormInput } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { useEffect } from "react";

import { UserUpdatePasswordFormSchema } from "./schema";
import { UserUpdatePasswordFormValues } from "./types";
import { updateCurrentUserPassword } from "../api/actions";

export type UseUserUpdatePasswordFormProps =
  UseFormInput<UserUpdatePasswordFormValues> & {
    onSuccess?: VoidFunction;
  };

export const useUserUpdatePasswordForm = ({
  initialValues = { oldPassword: "", newPassword1: "", newPassword2: "" },
  validateInputOnChange = true,
  onSuccess,
  ...props
}: UseUserUpdatePasswordFormProps = {}) => {
  const form = useForm<UserUpdatePasswordFormValues>({
    initialValues,
    validate: zod4Resolver(UserUpdatePasswordFormSchema),
    validateInputOnChange,
    ...props,
  });

  const submit = form.onSubmit(async (values) => {
    const response = await updateCurrentUserPassword({
      old_password: values.oldPassword,
      new_password: values.newPassword1,
    });

    if (response?.ok) {
      return onSuccess?.();
    }

    if (response?.status === 403) {
      return form.setFieldError("oldPassword", "Старый пароль введён неверно.");
    }
  });

  useEffect(() => {
    if (form.isDirty("newPassword2")) {
      form.validateField("newPassword2");
    }
  }, [form.values.newPassword1]);

  useEffect(() => {
    if (form.isDirty("newPassword1")) {
      form.validateField("newPassword1");
    }
  }, [form.values.newPassword2]);

  return [form, submit] as const;
};
