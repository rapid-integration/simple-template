import { useForm, UseFormInput, zodResolver } from "@mantine/form";

import { UserUpdateUsernameFormSchema } from "./schema";
import { UserUpdateUsernameFormValues } from "./types";
import { updateCurrentUserUsername } from "../api/actions";

export type UseUserUpdateUsernameFormProps =
  UseFormInput<UserUpdateUsernameFormValues> & {
    onSuccess?: VoidFunction;
  };

export const useUserUpdateUsernameForm = ({
  initialValues = { username: "" },
  validateInputOnChange = true,
  onSuccess,
  ...props
}: UseUserUpdateUsernameFormProps = {}) => {
  const form = useForm<UserUpdateUsernameFormValues>({
    initialValues,
    validate: zodResolver(UserUpdateUsernameFormSchema),
    validateInputOnChange,
    ...props,
  });

  const submit = form.onSubmit(async (values) => {
    const response = await updateCurrentUserUsername(values);

    if (!response) {
      return;
    }
    if (response.ok) {
      return onSuccess?.();
    }

    switch (response.status) {
      case 409:
        return form.setFieldError(
          "username",
          "Это имя пользователя уже занято.",
          // { shouldFocus: true },
        );
    }
  });

  return [form, submit] as const;
};
