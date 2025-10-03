"use client";

import { SegmentedControl } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

import { routes } from "@/shared/config/navigation";

export const AuthSegmentedControl = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SegmentedControl
      id="auth-segmented-control"
      name="auth-segmented-control"
      data={[
        { label: "Вход", value: routes.login() },
        { label: "Регистрация", value: routes.register() },
      ]}
      value={pathname ?? undefined}
      onChange={router.push}
      fullWidth
    />
  );
};
