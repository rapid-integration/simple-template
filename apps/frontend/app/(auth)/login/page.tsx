import { Metadata } from "next";
import { Suspense } from "react";

import { LoginForm } from "@/features/auth/login";
import { routes } from "@/shared/config/navigation";
import Bar from "@/shared/ui/bar";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Вход",
};

type LoginPageProps = {
  searchParams?: unknown;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { next } = routes.login.$parseSearchParams(await searchParams);

  return (
    <Page>
      <Bar>
        <Bar.Center showAfterScrolled>Вход</Bar.Center>
      </Bar>
      <Page.Content size="md" className="justify-center">
        <Suspense>
          <LoginForm next={next} />
        </Suspense>
      </Page.Content>
    </Page>
  );
}
