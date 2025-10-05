import { Stack, Title } from "@mantine/core";

import { UsersInfiniteList } from "@/widgets/user/list";

export const UsersPage: React.FC = () => {
  return (
    <Stack gap={0}>
      <Title order={1}>Пользователи</Title>

      <UsersInfiniteList limit={20} />
    </Stack>
  );
};
