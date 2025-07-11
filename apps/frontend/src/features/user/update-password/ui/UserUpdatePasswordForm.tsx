"use client";

import { LoaderIcon } from "lucide-react";
import { ComponentProps, FunctionComponent } from "react";
import { toast } from "sonner";

import { cn } from "@/shared/lib/utils";
import Button from "@/shared/ui/button";
import Form from "@/shared/ui/form";
import Input from "@/shared/ui/input";

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
      toast.success("Пароль был успешно обновлён!");
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={submit}
        className={cn("flex w-full grow flex-col", className)}
        {...otherProps}
      >
        <Form.Field
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <Form.Item className="mb-6">
              <Form.Label>Старый пароль</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Введите ваш старый пароль…"
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
            <Form.Item className="mb-6">
              <Form.Label>Новый пароль</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Введите новый пароль…"
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
            <Form.Item>
              <Form.Label>Подтверждение нового пароля</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Введите новый пароль ещё раз…"
                  type="password"
                  autoComplete="new-password"
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Response />

        <Button
          type="submit"
          className="mt-6"
          disabled={
            !form.formState.isDirty || !form.formState.isValid || pending
          }
        >
          {pending ? (
            <>
              <LoaderIcon className="animate-spin" />
              <span>Сохранение…</span>
            </>
          ) : (
            <>Сохранить</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default UserUpdatePasswordForm;
