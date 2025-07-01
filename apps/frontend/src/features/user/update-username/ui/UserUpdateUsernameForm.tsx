"use client";

import { LoaderIcon } from "lucide-react";
import { ComponentProps, FunctionComponent } from "react";

import { cn } from "@/shared/lib/utils";
import Button from "@/shared/ui/button";
import Form from "@/shared/ui/form";
import Input from "@/shared/ui/input";
import { toast } from "@/shared/ui/sonner";

import { useUserUpdateUsernameForm } from "../model/form";
import { UserUpdateUsernameFormFieldValues } from "../model/types";

interface UserUpdateUsernameFormProps
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  defaultValues?: UserUpdateUsernameFormFieldValues;
  onSuccess?: VoidFunction;
}

const UserUpdateUsernameForm: FunctionComponent<
  UserUpdateUsernameFormProps
> = ({
  defaultValues = { username: "" },
  onSuccess,
  className,
  ...otherProps
}) => {
  const [form, submit, pending] = useUserUpdateUsernameForm({
    defaultValues,
    onSuccess: () => {
      onSuccess?.();
      toast.success("Username has been successfully updated!");
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={submit}
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
            pending || !form.formState.isValid || !form.formState.isDirty
          }
        >
          {pending ? (
            <>
              <LoaderIcon className="animate-spin" />
              <span>Saving…</span>
            </>
          ) : (
            <>Save</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default UserUpdateUsernameForm;
