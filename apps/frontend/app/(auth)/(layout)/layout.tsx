"use client";

import {
  Center,
  SegmentedControl,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { routes } from "@/shared/config/navigation";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const mounted = useMounted();
  const pathname = usePathname();

  return (
    <Center h="100dvh" w="100dvw">
      <Stack maw="26rem" p="md" w="100%">
        <Center>
          <Image src="/favicon.ico" alt="Логотип" width={56} height={56} />
        </Center>

        <Stack component="hgroup" gap="xs">
          <Title order={1} size="lg" ta="center" fw={600}>
            Добро пожаловать!
          </Title>
          <Text size="sm" ta="center" tw="balance">
            Войдите или создайте аккаунт, чтобы продолжить.
          </Text>
        </Stack>

        {mounted ? (
          <SegmentedControl
            data={[
              { label: "Вход", value: routes.login() },
              { label: "Регистрация", value: routes.register() },
            ]}
            value={pathname ?? undefined}
            onChange={router.push}
            fullWidth
          />
        ) : (
          <Skeleton height={35.69} width="100%" />
        )}

        {children}
      </Stack>
    </Center>
  );
}
