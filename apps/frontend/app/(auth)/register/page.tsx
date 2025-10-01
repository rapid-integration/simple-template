import { Metadata } from "next";
import { Suspense } from "react";

import { RegisterForm } from "@/features/auth/register";
import { routes } from "@/shared/config/navigation";
import Bar from "@/shared/ui/bar";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Регистрация",
};

type RegisterPageProps = {
  searchParams?: unknown;
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const { next } = routes.register.$parseSearchParams(await searchParams);

  return (
    <Page>
      <Bar>
        <Bar.Center showAfterScrolled>Регистрация</Bar.Center>
      </Bar>
      <Page.Content size="md" className="justify-center">
        <Suspense>
          <RegisterForm next={next} />
        </Suspense>
      </Page.Content>
    </Page>
  );
}
