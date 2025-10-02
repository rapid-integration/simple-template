import { Button, Center, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";
import { LuArrowLeft, LuTrafficCone } from "react-icons/lu";

import { routes } from "@/shared/config/navigation";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <Center component="main" h="100dvh" w="100dvw">
      <Stack>
        <ThemeIcon w={96} h={96} variant="transparent" mx="auto">
          <LuTrafficCone width={96} height={96} />
        </ThemeIcon>

        <Stack component="hgroup">
          <Title order={1} ta="center">
            Страница не найдена
          </Title>
          <Text ta="center">Этой страницы не существует</Text>
        </Stack>

        <Button
          component={Link}
          href={routes.home()}
          size="lg"
          leftSection={<LuArrowLeft />}
        >
          На главную
        </Button>
      </Stack>
    </Center>
  );
}
