import { FunctionComponent } from "react";

import UserProfileAbout from "./UserProfileAbout";
import UserProfileInfo from "./UserProfileInfo";
import UserProfileSection from "./UserProfileSection";

interface UserProfileProps {
  avatar: string;
  name: string;
  email: string;
  registrationDate: string;
  id: string;
  about: string;
}

const UserProfile: FunctionComponent<UserProfileProps> = (props) => {
  return (
    <div className="flex flex-col gap-8">
      <UserProfileSection
        avatar={props.avatar}
        name={props.name}
        email={props.email}
      />

      <UserProfileInfo
        registrationDate={props.registrationDate}
        id={props.id}
      />

      <UserProfileAbout about={props.about} />
    </div>
  );
};

export default UserProfile;
