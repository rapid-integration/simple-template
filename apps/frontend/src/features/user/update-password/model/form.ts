import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { UserUpdatePasswordFormSchema } from "./schema";
import { UserUpdatePasswordFormFieldValues } from "./types";
import { updateCurrentUserPassword } from "../api/actions";

const errors = {
  403: "Старый пароль введён неверно.",
} as const;

export const useUserUpdatePasswordForm = ({
  defaultValues = { oldPassword: "", newPassword1: "", newPassword2: "" },
  onSuccess,
}: {
  defaultValues?: UserUpdatePasswordFormFieldValues;

  onSuccess?: VoidFunction;
}) => {
  const form = useForm<UserUpdatePasswordFormFieldValues>({
    mode: "onChange",
    resolver: zodResolver(UserUpdatePasswordFormSchema),
    defaultValues,
  });

  const old_password = form.watch("oldPassword");
  const new_password = form.watch("newPassword1");

  const [response, action, pending] = useActionState(
    updateCurrentUserPassword.bind(null, { old_password, new_password }),
    undefined,
  );

  const submit = form.handleSubmit(() => startTransition(action));

  useEffect(() => {
    if (!response) {
      return;
    }

    if (response.ok) {
      onSuccess?.();
    } else {
      form.setError("root", {
        message: errors[response.status as keyof typeof errors],
      });
    }
  }, [response]);

  return [form, submit, pending] as const;
};
