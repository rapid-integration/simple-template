import { Button, Center, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";
import { LuTrafficCone } from "react-icons/lu";
import { TbArrowLeft } from "react-icons/tb";

import { routes } from "@/shared/config/navigation";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <Center component="main" h="100dvh" w="100dvw">
      <Stack gap="md">
        <ThemeIcon w={96} h={96} variant="transparent" mx="auto">
          <LuTrafficCone size={96} />
        </ThemeIcon>

        <Stack component="hgroup" gap="xs">
          <Title order={1} size="h2" ta="center">
            Страница не найдена
          </Title>
          <Text ta="center">Этой страницы не существует</Text>
        </Stack>

        <Button
          component={Link}
          href={routes.home()}
          size="md"
          mx="auto"
          leftSection={<TbArrowLeft size={24} />}
        >
          На главную
        </Button>
      </Stack>
    </Center>
  );
}
