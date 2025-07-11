import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { UserUpdateUsernameFormSchema } from "./schema";
import { UserUpdateUsernameFormFieldValues } from "./types";
import { updateCurrentUserUsername } from "../api/actions";

const errors = {
  409: "Это имя пользователя уже занято.",
} as const;

export const useUserUpdateUsernameForm = ({
  defaultValues = { username: "" },
  onSuccess,
}: {
  defaultValues?: UserUpdateUsernameFormFieldValues;
  onSuccess?: VoidFunction;
}) => {
  const form = useForm<UserUpdateUsernameFormFieldValues>({
    mode: "onChange",
    resolver: zodResolver(UserUpdateUsernameFormSchema),
    defaultValues,
  });

  const username = form.watch("username");

  const [response, dispatch, pending] = useActionState(
    updateCurrentUserUsername.bind(null, { username }),
    undefined,
  );

  const submit = form.handleSubmit(() => startTransition(dispatch));

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
