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
      toast.success("Имя пользователя было успешно обновлено!");
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
          name="username"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Новое имя пользователя</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Введите новое имя пользователя…"
                  autoComplete="username"
                  spellCheck={false}
                  {...field}
                />
              </Form.Control>
              <Form.Description>
                Это имя пользователя должно быть уникальным.
              </Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Response />

        <Button
          type="submit"
          className="mt-6"
          disabled={
            pending || !form.formState.isValid || !form.formState.isDirty
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

export default UserUpdateUsernameForm;
