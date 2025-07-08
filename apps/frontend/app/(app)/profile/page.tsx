import { Metadata } from "next";

import { getCurrentUser } from "@/entities/user";
import { ProfilePageBar } from "@/pages/profile";
import Page from "@/shared/ui/page";
import { UserProfile } from "@/widgets/profile";

export const metadata: Metadata = {
  title: "Профиль",
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
