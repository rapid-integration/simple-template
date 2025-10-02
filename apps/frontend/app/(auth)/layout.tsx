import { Center, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";

import { getCurrentUserOrUndefined } from "@/entities/user";
import { routes } from "@/shared/config/navigation";
import { redirectToNextURL } from "@/shared/lib/navigation";
import { AuthTypeSegmentedControl } from "@/widgets/auth";

export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  const currentUser = await getCurrentUserOrUndefined();

  if (currentUser !== undefined) {
    return await redirectToNextURL({ fallbackUrl: routes.home() });
  }

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

        <AuthTypeSegmentedControl />

        {children}
      </Stack>
    </Center>
  );
}
