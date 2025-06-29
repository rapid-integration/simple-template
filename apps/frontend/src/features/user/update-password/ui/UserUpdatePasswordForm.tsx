"use client";

import { LoaderIcon } from "lucide-react";
import { ComponentProps, FunctionComponent } from "react";
import { toast } from "sonner";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import Form from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { useUserUpdatePasswordForm } from "../model/form";
import { UserUpdatePasswordFormFieldValues } from "../model/types";

interface UserUpdatePasswordFormProps
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  defaultValues?: UserUpdatePasswordFormFieldValues;
  onSuccess?: VoidFunction;
}

const UserUpdatePasswordForm: FunctionComponent<
  UserUpdatePasswordFormProps
> = ({ defaultValues, onSuccess, className, ...otherProps }) => {
  const [form, submit, pending] = useUserUpdatePasswordForm({
    defaultValues,
    onSuccess: () => {
      onSuccess?.();
      toast.success("Password has been successfully updated!");
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
            !form.formState.isDirty || !form.formState.isValid || pending
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

export default UserUpdatePasswordForm;
