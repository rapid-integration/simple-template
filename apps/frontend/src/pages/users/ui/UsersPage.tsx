import { Stack, Title } from "@mantine/core";

import { UsersInfiniteList } from "@/widgets/user/list";

export const UsersPage: React.FC = () => {
  return (
    <Stack gap={0}>
      <Title order={1} size="h2">
        Пользователи
      </Title>

      <UsersInfiniteList limit={30} />
    </Stack>
  );
};
