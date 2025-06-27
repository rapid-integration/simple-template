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

import { RegisterFormSchema } from "../model/schema";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: { username: "", password1: "", password2: "" },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Create a new account if you do not have one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((v) => console.log(v))}
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
                    <Form.Description>
                      The username must be unique.
                    </Form.Description>
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <Form.Field
                control={form.control}
                name="password1"
                render={({ field }) => (
                  <Form.Item className="flex flex-col gap-2">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control>
                      <Input
                        placeholder="Enter your new password…"
                        type="password"
                        {...field}
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <Form.Field
                control={form.control}
                name="password2"
                render={({ field }) => (
                  <Form.Item className="flex flex-col gap-2">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control>
                      <Input
                        placeholder="Enter your new password again…"
                        type="password"
                        {...field}
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <div className="flex flex-col gap-2">
                <Button
                  type="submit"
                  disabled={!form.formState.isDirty || !form.formState.isValid}
                  stretched
                >
                  Register
                </Button>
                <Button asChild variant="outline" stretched>
                  <Link href="/login">Go to login form</Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
