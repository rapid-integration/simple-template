import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { RegisterFormSchema } from "./schema";
import { RegisterFormFieldValues } from "./types";
import { register } from "../api/actions";

const errors = {
  409: "Это имя пользователя уже занято.",
} as const;

export const useRegisterForm = (
  defaultValues: RegisterFormFieldValues = {
    username: "",
    password1: "",
    password2: "",
  },
) => {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(RegisterFormSchema),
    defaultValues,
  });

  const username = form.watch("username");
  const password = form.watch("password1");

  const [response, action, pending] = useActionState(
    register.bind(null, { username, password }),
    undefined,
  );

  const submit = form.handleSubmit(() => startTransition(action));

  useEffect(() => {
    if (response) {
      form.setError("root", {
        message: errors[response.status as keyof typeof errors],
      });
    }
  }, [response]);

  return [form, submit, pending] as const;
};
