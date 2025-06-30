import { Metadata } from "next";
import { Suspense } from "react";

import { LoginForm } from "@/features/auth/login";
import Bar from "@/shared/ui/bar";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <Page>
      <Bar>
        <Bar.Center showAfterScrolled>Login</Bar.Center>
      </Bar>
      <Page.Content size="md" className="justify-center">
        <Suspense>
          <LoginForm />
        </Suspense>
      </Page.Content>
    </Page>
  );
}
