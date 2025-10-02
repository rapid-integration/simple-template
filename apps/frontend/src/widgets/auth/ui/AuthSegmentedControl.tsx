"use client";

import { SegmentedControl } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

import { routes } from "@/shared/config/navigation";

export const AuthTypeSegmentedControl = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SegmentedControl
      data={[
        { label: "Вход", value: routes.login() },
        { label: "Регистрация", value: routes.register() },
      ]}
      value={pathname || undefined}
      onChange={router.push}
      fullWidth
    />
  );
};
