"use client";

import Link from "next/link";

import { routes } from "@/shared/config/navigation";
import { cn } from "@/shared/lib/utils";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Form from "@/shared/ui/form";
import Input from "@/shared/ui/input";
import Spinner from "@/shared/ui/spinner";

import { useLoginForm } from "../model/form";

export function LoginForm({
  next,
  className,
  ...props
}: React.ComponentProps<"div"> & { next?: string | undefined }) {
  const [form, submit, pending] = useLoginForm();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <Card.Header>
          <Card.Title>Вход</Card.Title>
          <Card.Description>
            Войдите, если у вас уже есть аккаунт.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <Form {...form}>
            <form onSubmit={submit} className="flex flex-col">
              <Form.Field
                control={form.control}
                name="username"
                render={({ field }) => (
                  <Form.Item className="mb-6">
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control>
                      <Input
                        placeholder="Введите ваше имя пользователя…"
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
                  <Form.Item>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control>
                      <Input
                        type="password"
                        placeholder="Введите ваш пароль…"
                        autoComplete="password"
                        {...field}
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <Form.Response />

              <div className="mt-6 flex flex-col gap-2">
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
                      <Spinner />
                      <span>Выполняется вход…</span>
                    </>
                  ) : (
                    <>Войти</>
                  )}
                </Button>
                <Button asChild variant="outline">
                  <Link href={routes.register({ search: { next } })}>
                    К форме регистрации
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
