import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { login } from "../api/actions";
import { LoginFormSchema } from "./schema";
import { LoginFormFieldValues } from "./types";

const errors = {
  401: "Wrong password.",
  404: "There is no user with such username.",
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

  const [response, action, pending] = useActionState(
    login.bind(null, { username, password, scope: "" }),
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
