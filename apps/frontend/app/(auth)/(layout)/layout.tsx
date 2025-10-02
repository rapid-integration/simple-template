"use client";

import { Center, SegmentedControl, Stack, Text, Title } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

import { routes } from "@/shared/config/navigation";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Center h="100dvh" w="100dvw">
      <Stack maw="26rem" p="md" w="100%">
        <Stack component="hgroup" gap="xs">
          <Title order={1} size="lg" ta="center" fw={600}>
            Добро пожаловать!
          </Title>
          <Text size="sm" ta="center" tw="balance">
            Войдите или создайте аккаунт, чтобы продолжить.
          </Text>
        </Stack>

        <SegmentedControl
          data={[
            { label: "Вход", value: routes.login() },
            { label: "Регистрация", value: routes.register() },
          ]}
          value={pathname}
          onChange={router.push}
          fullWidth
        />

        {children}
      </Stack>
    </Center>
  );
}
