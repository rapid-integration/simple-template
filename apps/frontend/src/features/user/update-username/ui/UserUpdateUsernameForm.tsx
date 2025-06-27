import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps, FunctionComponent } from "react";
import { useForm } from "react-hook-form";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import Form from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { UserUpdateUsernameFormSchema } from "../model/schema";
import { UserUpdateUsernameFormFieldValues } from "../model/types";

interface UserUpdateUsernameFormProps
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  defaultValues?: UserUpdateUsernameFormFieldValues;
  onSubmit?: (values: UserUpdateUsernameFormFieldValues) => void;
}

const UserUpdateUsernameForm: FunctionComponent<
  UserUpdateUsernameFormProps
> = ({
  defaultValues = { username: "" },
  onSubmit,
  className,
  ...otherProps
}) => {
  const form = useForm<UserUpdateUsernameFormFieldValues>({
    mode: "onChange",
    resolver: zodResolver(UserUpdateUsernameFormSchema),
    defaultValues,
  });

  const handleSubmit = (values: UserUpdateUsernameFormFieldValues) => {
    console.log(values);
    onSubmit?.(values);
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

        <Button
          type="submit"
          disabled={!form.formState.isDirty || !form.formState.isValid}
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default UserUpdateUsernameForm;
