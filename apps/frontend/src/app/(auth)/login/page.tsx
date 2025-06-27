import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { LoginForm } from "@/features/auth/login";
import Bar from "@/shared/ui/bar";
import { Button } from "@/shared/ui/button";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <Page>
      <Bar>
        <Bar.Start>
          <Button asChild variant="ghost" className="text-muted-foreground">
            <Link href="/">
              <ArrowLeftIcon />
              <span>Back</span>
            </Link>
          </Button>
        </Bar.Start>
        <Bar.Center showAfterScrolled>Login</Bar.Center>
      </Bar>
      <Page.Content size="md" className="justify-center">
        <LoginForm />
      </Page.Content>
    </Page>
  );
}
