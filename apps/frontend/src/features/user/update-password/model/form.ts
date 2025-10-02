import { useForm, UseFormInput, zodResolver } from "@mantine/form";

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
    validate: zodResolver(UserUpdatePasswordFormSchema),
    validateInputOnChange,
    ...props,
  });

  const submit = form.onSubmit(async (values) => {
    const response = await updateCurrentUserPassword({
      old_password: values.oldPassword,
      new_password: values.newPassword1,
    });

    if (!response) {
      return;
    }
    if (response.ok) {
      return onSuccess?.();
    }

    switch (response.status) {
      case 403:
        return form.setFieldError(
          "oldPassword",
          "Старый пароль введён неверно.",

          // { shouldFocus: true },
        );
    }
  });

  return [form, submit] as const;
};
