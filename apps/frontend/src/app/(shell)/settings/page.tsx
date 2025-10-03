import { Avatar, Card, Divider, Stack, Title } from "@mantine/core";
import { Metadata } from "next";

import {
  getCurrentUser,
  UserColorSchemeCell,
  UserCreatedAtCell,
  UserIdCell,
} from "@/entities/user";
import { LogoutButton } from "@/features/auth/logout";
import { UserUpdatePasswordCell } from "@/features/user/update-password";
import { UserUpdateUsernameCell } from "@/features/user/update-username";

export const metadata: Metadata = {
  title: "Настройки",
};

export default async function SettingsPage() {
  const currentUser = await getCurrentUser();

  return (
    <Stack>
      <Stack gap="xs" mb="xs">
        <Avatar
          name={currentUser.username}
          color="initials"
          size="xl"
          mx="auto"
        />
        <Title order={1} ta="center">
          {currentUser.username}
        </Title>
      </Stack>

      <Card p={0} withBorder>
        <UserUpdateUsernameCell value={currentUser.username} />
        <Divider />
        <UserUpdatePasswordCell />
      </Card>

      <Card p={0} withBorder>
        <UserCreatedAtCell value={currentUser.created_at} />
        <Divider />
        <UserIdCell value={currentUser.id} />
      </Card>

      <Card p={0} withBorder>
        <UserColorSchemeCell />
      </Card>

      <LogoutButton />
    </Stack>
  );
}
