"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps, FunctionComponent } from "react";
import { useForm } from "react-hook-form";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import Form from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { toast } from "@/shared/ui/sonner";

import { updateCurrentUserUsername } from "../api/actions";
import { UserUpdateUsernameFormSchema } from "../model/schema";
import { UserUpdateUsernameFormFieldValues } from "../model/types";

interface UserUpdateUsernameFormProps
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  defaultValues?: UserUpdateUsernameFormFieldValues;
  onSubmit?: (values: UserUpdateUsernameFormFieldValues) => void;
  onSuccess?: VoidFunction;
}

const UserUpdateUsernameForm: FunctionComponent<
  UserUpdateUsernameFormProps
> = ({
  defaultValues = { username: "" },
  onSubmit,
  onSuccess,
  className,
  ...otherProps
}) => {
  const form = useForm<UserUpdateUsernameFormFieldValues>({
    mode: "onChange",
    resolver: zodResolver(UserUpdateUsernameFormSchema),
    defaultValues,
  });

  const handleSubmit = async (values: UserUpdateUsernameFormFieldValues) => {
    onSubmit?.(values);

    const result = await updateCurrentUserUsername(values);

    if (result.ok) {
      onSuccess?.();
      toast.success("Username has been successfully updated!");
    } else {
      const messages = {
        409: "This username is already taken.",
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
          name="username"
          render={({ field }) => (
            <Form.Item className="flex flex-col gap-2">
              <Form.Label>Username</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Enter your username…"
                  autoComplete="username"
                  spellCheck={false}
                  {...field}
                />
              </Form.Control>
              <Form.Description>The username must be unique.</Form.Description>
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

export default UserUpdateUsernameForm;
