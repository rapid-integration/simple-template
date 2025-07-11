import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { RegisterFormSchema } from "./schema";
import { RegisterFormFieldValues } from "./types";
import { register } from "../api/actions";

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

  const [response, dispatch, pending] = useActionState(
    register.bind(null, { username, password }),
    undefined,
  );

  const submit = form.handleSubmit(() => startTransition(dispatch));

  useEffect(() => {
    switch (response?.status) {
      case 409:
        return form.setError(
          "username",
          {
            message: "Это имя пользователя уже занято.",
          },
          { shouldFocus: true },
        );
    }
  }, [response]);

  return [form, submit, pending] as const;
};
