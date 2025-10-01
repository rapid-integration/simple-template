"use client";

import { FunctionComponent } from "react";

import { UserAvatar } from "@/entities/user";
import { UserResponse } from "@/shared/api";

interface UserProfileSectionProps {
  user: UserResponse;
}

const UserProfileSection: FunctionComponent<UserProfileSectionProps> = ({
  user,
}) => {
  return (
    <div className="space-y-3">
      <UserAvatar className="mx-auto size-24 text-4xl" user={user} />
      <hgroup className="text-center">
        <h2 className="text-3xl font-semibold md:text-2xl">{user.username}</h2>
      </hgroup>
    </div>
  );
};

export default UserProfileSection;
