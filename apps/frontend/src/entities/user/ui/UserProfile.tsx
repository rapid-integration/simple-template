import { format } from "date-fns";
import { FunctionComponent } from "react";

import { UserResponse } from "@/shared/api/types";

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
        registrationDate={format(user.created_at, "dd.MM.yyyy")}
        id={user.id}
      />
    </div>
  );
};

export default UserProfile;
