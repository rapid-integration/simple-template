"use client";

import { Avatar, Stack, Title } from "@mantine/core";

import { UserResponse } from "@/shared/api";

export type UserProfileSectionProps = {
  user: UserResponse;
};

export const UserProfileSection: React.FC<UserProfileSectionProps> = ({
  user,
}) => {
  return (
    <Stack gap="xs" mb="xs">
      <Avatar name={user.username} color="initials" size="xl" mx="auto" />
      <Title order={2} ta="center">
        {user.username}
      </Title>
    </Stack>
  );
};
