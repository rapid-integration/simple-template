import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <Stack component="hgroup">
      <Title order={1}>Главная</Title>
      <Text>Тут пока что пусто</Text>
    </Stack>
  );
}
