"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps, FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import Form from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { updateCurrentUserPassword } from "../api/actions";
import { UserUpdatePasswordFormSchema } from "../model/schema";
import { UserUpdatePasswordFormFieldValues } from "../model/types";

interface UserUpdatePasswordFormProps
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  defaultValues?: UserUpdatePasswordFormFieldValues;
  onSubmit?: (values: UserUpdatePasswordFormFieldValues) => void;
  onSuccess?: VoidFunction;
}

const UserUpdatePasswordForm: FunctionComponent<
  UserUpdatePasswordFormProps
> = ({
  defaultValues = { newPassword1: "", newPassword2: "", oldPassword: "" },
  onSubmit,
  onSuccess,
  className,
  ...otherProps
}) => {
  const form = useForm<UserUpdatePasswordFormFieldValues>({
    mode: "onChange",
    resolver: zodResolver(UserUpdatePasswordFormSchema),
    defaultValues,
  });

  const handleSubmit = async (values: UserUpdatePasswordFormFieldValues) => {
    onSubmit?.(values);

    const result = await updateCurrentUserPassword({
      old_password: values.oldPassword,
      new_password: values.newPassword1,
    });

    if (result.ok) {
      onSuccess?.();
      toast.success("Password has been successfully updated!");
    } else {
      const messages = {
        403: "Old password is wrong.",
      } as const;

      form.setError("root", {
        message: messages[result.status as keyof typeof messages],
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("flex w-full grow flex-col gap-6", className)}
        {...otherProps}
      >
        <Form.Field
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <Form.Item className="flex flex-col gap-2">
              <Form.Label>Old Password</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Enter your old password…"
                  type="password"
                  autoComplete="password"
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="newPassword1"
          render={({ field }) => (
            <Form.Item className="flex flex-col gap-2">
              <Form.Label>New Password</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Enter your new password…"
                  type="password"
                  autoComplete="new-password"
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="newPassword2"
          render={({ field }) => (
            <Form.Item className="flex flex-col gap-2">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Enter your new password again…"
                  type="password"
                  autoComplete="new-password"
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        {form.formState.errors.root && (
          <p className="text-sm text-destructive">
            {form.formState.errors.root.message}
          </p>
        )}

        <Button
          type="submit"
          disabled={
            !form.formState.isDirty ||
            !form.formState.isValid ||
            form.formState.isSubmitting
          }
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default UserUpdatePasswordForm;
