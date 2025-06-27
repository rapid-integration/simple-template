import { FunctionComponent } from "react";

import UserProfileInfo from "./UserProfileInfo";
import UserProfileSection from "./UserProfileSection";

interface UserProfileProps {
  avatar: string;
  name: string;
  registrationDate: string;
  id: string;
}

const UserProfile: FunctionComponent<UserProfileProps> = (props) => {
  return (
    <div className="flex flex-col gap-8">
      <UserProfileSection avatar={props.avatar} name={props.name} />

      <UserProfileInfo
        registrationDate={props.registrationDate}
        id={props.id}
      />
    </div>
  );
};

export default UserProfile;
