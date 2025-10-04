import {
  Avatar,
  Button,
  Card,
  Divider,
  Stack,
  ThemeIcon,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { TbArrowLeft, TbUserCancel } from "react-icons/tb";

import {
  getUser,
  UserCreatedAtCell,
  UserIdCell,
  UserUsernameCell,
} from "@/entities/user";
import { routes } from "@/shared/config";
import { Empty } from "@/shared/ui/Empty";

export type UserPageProps = {
  params: unknown;
};

export const UserPage: React.FC<UserPageProps> = async ({ params }) => {
  const { username } = routes.user.$parseParams(await params);
  const user = await getUser({ path: { username } });

  if (user === undefined) {
    return (
      <Empty
        my="xl"
        topSection={
          <ThemeIcon w={64} h={64} variant="transparent" mx="auto">
            <TbUserCancel size={64} />
          </ThemeIcon>
        }
        label="Пользователь не найден"
        description="Такого пользователя не существует"
        bottomSection={
          <Button
            component={Link}
            href={routes.users()}
            size="md"
            mx="auto"
            variant="light"
            leftSection={<TbArrowLeft size={24} />}
          >
            Назад
          </Button>
        }
      />
    );
  }

  return (
    <Stack flex={1} display="flex">
      <Button
        component={Link}
        href={routes.users()}
        variant="subtle"
        leftSection={<TbArrowLeft size={24} />}
        w="fit-content"
      >
        Назад
      </Button>

      <Stack gap="xs" mb="xs">
        <Avatar name={user.username} color="initials" size="xl" mx="auto" />
        <Title order={1} ta="center">
          {user.username}
        </Title>
      </Stack>

      <Card p={0} withBorder>
        <UserUsernameCell value={user.username} />
      </Card>

      <Card p={0} withBorder>
        <UserCreatedAtCell value={user.created_at} />
        <Divider />
        <UserIdCell value={user.id} />
      </Card>
    </Stack>
  );
};
