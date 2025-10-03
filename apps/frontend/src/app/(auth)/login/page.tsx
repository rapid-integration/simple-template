import { Metadata } from "next";

import { LoginForm } from "@/features/auth/login";

export const metadata: Metadata = {
  title: "Вход",
};

export default function LoginPage() {
  return <LoginForm />;
}
