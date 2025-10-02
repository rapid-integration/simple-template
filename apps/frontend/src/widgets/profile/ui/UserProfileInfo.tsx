"use client";

import { Card, Divider, Stack } from "@mantine/core";

import {
  UserColorSchemeCell,
  UserCreatedAtCell,
  UserIdCell,
} from "@/entities/user";
import { LogoutButton } from "@/features/auth/logout";
import { UserUpdatePasswordCell } from "@/features/user/update-password";
import { UserUpdateUsernameCell } from "@/features/user/update-username";

export type UserProfileInfoProps = {
  username: string;
  created_at: string;
  id: string;
};

export const UserProfileInfo: React.FC<UserProfileInfoProps> = (props) => {
  return (
    <Stack>
      <Card p={0} withBorder>
        <UserUpdateUsernameCell value={props.username} />
        <Divider />
        <UserUpdatePasswordCell />
      </Card>

      <Card p={0} withBorder>
        <UserCreatedAtCell value={props.created_at} />
        <Divider />
        <UserIdCell value={props.id} />
      </Card>

      <Card p={0} withBorder>
        <UserColorSchemeCell />
      </Card>

      <LogoutButton />
    </Stack>
  );
};
