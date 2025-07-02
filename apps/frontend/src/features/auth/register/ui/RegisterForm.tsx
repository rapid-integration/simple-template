"use client";

import { LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { cn } from "@/shared/lib/utils";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Form from "@/shared/ui/form";
import Input from "@/shared/ui/input";

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
          <Card.Title>Регистрация</Card.Title>
          <Card.Description>
            Создайте новый аккаунт, если у вас его ещё нет.
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
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control>
                      <Input
                        placeholder="Введите новое имя пользователя…"
                        autoComplete="username"
                        spellCheck={false}
                        {...field}
                      />
                    </Form.Control>
                    <Form.Description>
                      Это имя пользователя должно быть уникально.
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
                    <Form.Label>Новый пароль</Form.Label>
                    <Form.Control>
                      <Input
                        type="password"
                        placeholder="Введите новый пароль…"
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
                    <Form.Label>Подтверждение нового пароля</Form.Label>
                    <Form.Control>
                      <Input
                        type="password"
                        placeholder="Введите новый пароль ещё раз…"
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
                      <span>Выполняется регистрация…</span>
                    </>
                  ) : (
                    <>Зарегистрироваться</>
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
                    К форме входа
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
