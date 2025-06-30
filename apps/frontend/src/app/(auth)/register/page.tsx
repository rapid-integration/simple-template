import { Metadata } from "next";
import { Suspense } from "react";

import { RegisterForm } from "@/features/auth/register";
import Bar from "@/shared/ui/bar";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Register",
};

export default function LoginPage() {
  return (
    <Page>
      <Bar>
        <Bar.Center showAfterScrolled>Register</Bar.Center>
      </Bar>
      <Page.Content size="md" className="justify-center">
        <Suspense>
          <RegisterForm />
        </Suspense>
      </Page.Content>
    </Page>
  );
}
