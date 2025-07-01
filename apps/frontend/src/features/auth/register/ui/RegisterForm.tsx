"use client";

import { LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { cn } from "@/shared/lib/utils";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Form from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { useRegisterForm } from "../model/form";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [form, submit, pending] = useRegisterForm();
  const searchParams = useSearchParams();
  const next = searchParams?.get("next");

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <Card.Header>
          <Card.Title>Register</Card.Title>
          <Card.Description>
            Create a new account if you do not have one.
          </Card.Description>
        </Card.Header>
        <Card.Content>
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
                        type="password"
                        placeholder="Enter your new password…"
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
                name="password2"
                render={({ field }) => (
                  <Form.Item className="flex flex-col gap-2">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control>
                      <Input
                        type="password"
                        placeholder="Enter your new password again…"
                        autoComplete="new-password"
                        {...field}
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <Form.Response />

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
                      <span>Registering…</span>
                    </>
                  ) : (
                    <>Register</>
                  )}
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={
                      next
                        ? `/login?next=${encodeURIComponent(next)}`
                        : "/login"
                    }
                  >
                    Go to login form
                  </Link>
                </Button>
              </div>
            </form>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
