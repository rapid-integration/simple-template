import { Stack } from "@mantine/core";

import { UserResponse } from "@/shared/api";

import { UserProfileInfo } from "./UserProfileInfo";
import { UserProfileSection } from "./UserProfileSection";

export type UserProfileProps = {
  user: UserResponse;
};

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <Stack>
      <UserProfileSection user={user} />
      <UserProfileInfo
        username={user.username}
        created_at={user.created_at}
        id={user.id}
      />
    </Stack>
  );
};
