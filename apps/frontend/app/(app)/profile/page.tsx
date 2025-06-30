import { Metadata } from "next";

import { getCurrentUser, UserProfile } from "@/entities/user";
import { ProfilePageBar } from "@/pages/profile";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const currentUser = await getCurrentUser();

  return (
    <Page>
      <ProfilePageBar />
      <Page.Content size="xl">
        <UserProfile user={currentUser} />
      </Page.Content>
    </Page>
  );
}
