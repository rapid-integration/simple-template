import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { LoginFormSchema } from "./schema";
import { LoginFormFieldValues } from "./types";
import { login } from "../api/actions";

const errors = {
  401: "Введён неверный пароль.",
  404: "Пользователя с таким именем пользователя не существует.",
} as const;

export const useLoginForm = (
  defaultValues: LoginFormFieldValues = { username: "", password: "" },
) => {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(LoginFormSchema),
    defaultValues,
  });

  const username = form.watch("username");
  const password = form.watch("password");

  const [response, dispatch, pending] = useActionState(
    login.bind(null, { username, password, scope: "" }),
    undefined,
  );

  const submit = form.handleSubmit(() => startTransition(dispatch));

  useEffect(() => {
    if (response) {
      form.setError("root", {
        message: errors[response.status as keyof typeof errors],
      });
    }
  }, [response]);

  return [form, submit, pending] as const;
};
