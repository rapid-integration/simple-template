"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import Form from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { login } from "../api/actions";
import { LoginFormSchema } from "../model/schema";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(LoginFormSchema),
    defaultValues: { username: "", password: "" },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login if you already have an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(async (values) => {
                const result = await login({
                  scope: "",
                  username: values.username,
                  password: values.password,
                });

                const messages = {
                  401: "Wrong password.",
                  404: "There is no user with such username.",
                } as const;

                form.setError("root", {
                  message: messages[result.status as keyof typeof messages],
                });
              })}
              className="flex flex-col gap-6"
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
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <Form.Field
                control={form.control}
                name="password"
                render={({ field }) => (
                  <Form.Item className="flex flex-col gap-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control>
                      <Input
                        placeholder="Enter your password…"
                        type="password"
                        autoComplete="password"
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

              <div className="flex flex-col gap-2">
                <Button
                  type="submit"
                  disabled={
                    !form.formState.isDirty ||
                    !form.formState.isValid ||
                    form.formState.isSubmitting
                  }
                  stretched
                >
                  Login
                </Button>
                <Button asChild variant="outline" stretched>
                  <Link href="/register">Go to register form</Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
