import { Stack, Title } from "@mantine/core";
import { Metadata } from "next";

import { UsersInfiniteList } from "@/widgets/users";

export const metadata: Metadata = {
  title: "Пользователи",
};

export default async function UsersPage() {
  return (
    <Stack gap="xs">
      <Title order={1}>Пользователи</Title>

      <UsersInfiniteList limit={20} />
    </Stack>
  );
}
