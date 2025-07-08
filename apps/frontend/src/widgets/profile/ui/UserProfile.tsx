import { FunctionComponent } from "react";

import { UserResponse } from "@/shared/api";

import UserProfileInfo from "./UserProfileInfo";
import UserProfileSection from "./UserProfileSection";

interface UserProfileProps {
  user: UserResponse;
}

const UserProfile: FunctionComponent<UserProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-8">
      <UserProfileSection name={user.username} />
      <UserProfileInfo
        username={user.username}
        created_at={user.created_at}
        id={user.id}
      />
    </div>
  );
};

export default UserProfile;
