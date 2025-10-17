import { useForm, UseFormInput } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";

import { UserUpdateUsernameFormSchema } from "./schema";
import { UserUpdateUsernameFormValues } from "./types";
import { updateCurrentUserUsername } from "../api/actions";

export type UseUserUpdateUsernameFormProps =
  UseFormInput<UserUpdateUsernameFormValues> & {
    onSuccess?: VoidFunction;
  };

export const useUserUpdateUsernameForm = ({
  mode,
  initialValues = { username: "" },
  validateInputOnChange = true,
  onSuccess,
  ...props
}: UseUserUpdateUsernameFormProps = {}) => {
  const form = useForm<UserUpdateUsernameFormValues>({
    mode,
    initialValues,
    validate: zod4Resolver(UserUpdateUsernameFormSchema),
    validateInputOnChange,
    ...props,
  });

  const submit = form.onSubmit(async (values) => {
    const response = await updateCurrentUserUsername(values);

    if (response?.ok) {
      return onSuccess?.();
    }

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

  return [form, submit] as const;
};
