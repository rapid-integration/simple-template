import { Metadata } from "next";

import { UserProfileSection, withCurrentUser } from "@/entities/user";
import { UserProfileLogoutButton } from "@/features/auth/logout";
import { UserUpdatePasswordDataListItem } from "@/features/user/update-password";
import { UserUpdateUsernameDataListItem } from "@/features/user/update-username";
import { ProfileEditPageBar } from "@/pages/profile";
import DataList from "@/shared/ui/data-list";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Edit Profile",
};

const ProfileEditPage = withCurrentUser(({ currentUser }) => {
  return (
    <Page>
      <ProfileEditPageBar />

      <Page.Content size="xl" className="gap-8">
        <UserProfileSection name={currentUser.username} />

        <DataList>
          <UserUpdateUsernameDataListItem username={currentUser.username} />
          <UserUpdatePasswordDataListItem />
        </DataList>

        <UserProfileLogoutButton />
      </Page.Content>
    </Page>
  );
});

export default ProfileEditPage;
