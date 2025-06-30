import { Metadata } from "next";

import { UserProfile, withCurrentUser } from "@/entities/user";
import Page from "@/shared/ui/page";
import { ProfilePageBar } from "@/views/profile";

export const metadata: Metadata = {
  title: "Profile",
};

export const ProfilePage = withCurrentUser(({ currentUser }) => {
  return (
    <Page>
      <ProfilePageBar />
      <Page.Content size="xl">
        <UserProfile user={currentUser} />
      </Page.Content>
    </Page>
  );
});

export default ProfilePage;
