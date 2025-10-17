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
import { HiMiniArrowLeft } from "react-icons/hi2";
import { TbUserCancel } from "react-icons/tb";

import {
  getUser,
  UserCreatedAtCell,
  UserIdCell,
  UserUsernameCell,
} from "@/entities/user";
import { routes } from "@/shared/config";
import { Empty } from "@/shared/ui/Empty";

export type UserPageProps = {
  params?: Promise<unknown>;
  searchParams?: Promise<unknown>;
};

export const UserPage: React.FC<UserPageProps> = async ({
  params,
  searchParams,
}) => {
  const { username } = routes.user.$parseParams(await params);
  const parsedSearchParams = routes.user.$parseSearchParams(await searchParams);

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
        description="Такого пользователя не существует."
        bottomSection={
          <Button
            component={Link}
            href={parsedSearchParams?.back ?? routes.users()}
            mx="auto"
            leftSection={<HiMiniArrowLeft size={24} />}
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
        w="fit-content"
        href={parsedSearchParams?.back ?? routes.users()}
        variant="subtle"
        leftSection={<HiMiniArrowLeft size={24} />}
      >
        Назад
      </Button>

      <Stack gap="xs" mb="xs">
        <Avatar
          mx="auto"
          size="xl"
          name={user.username}
          color="initials"
          variant="filled"
        />
        <Title order={1} ta="center">
          {user.username}
        </Title>
      </Stack>

      <Card p={0}>
        <UserUsernameCell value={user.username} />
      </Card>

      <Card p={0}>
        <UserCreatedAtCell value={user.created_at} />
        <Divider />
        <UserIdCell value={user.id} />
      </Card>
    </Stack>
  );
};
