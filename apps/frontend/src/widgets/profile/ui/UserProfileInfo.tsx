"use client";

import { FunctionComponent } from "react";

import { UserCreatedAtCell, UserIdCell } from "@/entities/user";
import { LogoutButton } from "@/features/auth/logout";
import { UserUpdatePasswordCell } from "@/features/user/update-password";
import { UserUpdateUsernameCell } from "@/features/user/update-username";
import Group from "@/shared/ui/Group";

interface UserProfileInfoProps {
  username: string;
  created_at: string;
  id: string;
}

const UserProfileInfo: FunctionComponent<UserProfileInfoProps> = (props) => {
  return (
    <section className="flex flex-col gap-4">
      <Group>
        <UserUpdateUsernameCell value={props.username} />
        <UserUpdatePasswordCell />
      </Group>

      <Group>
        <UserCreatedAtCell value={props.created_at} />
        <UserIdCell value={props.id} />
      </Group>

      <LogoutButton />
    </section>
  );
};

export default UserProfileInfo;
