"use client";

import { LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import Form, { FormResponse } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { useLoginForm } from "../model/form";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [form, submit, pending] = useLoginForm();
  const searchParams = useSearchParams();
  const next = searchParams?.get("next");

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
            <form onSubmit={submit} className="flex flex-col gap-6">
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
                        type="password"
                        placeholder="Enter your password…"
                        autoComplete="password"
                        {...field}
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <FormResponse />

              <div className="flex flex-col gap-2">
                <Button
                  type="submit"
                  disabled={
                    !form.formState.isDirty ||
                    !form.formState.isValid ||
                    pending
                  }
                >
                  {pending ? (
                    <>
                      <LoaderIcon className="animate-spin" />
                      <span>Logging in…</span>
                    </>
                  ) : (
                    <>Login</>
                  )}
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={
                      next
                        ? `/register?next=${encodeURIComponent(next)}`
                        : "/register"
                    }
                  >
                    Go to register form
                  </Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
