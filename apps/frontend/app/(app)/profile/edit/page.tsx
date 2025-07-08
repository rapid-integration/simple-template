import { Metadata } from "next";

import { getCurrentUser } from "@/entities/user";
import { UserProfileLogoutButton } from "@/features/auth/logout";
import { UserUpdatePasswordDataListItem } from "@/features/user/update-password";
import { UserUpdateUsernameDataListItem } from "@/features/user/update-username";
import { ProfileEditPageBar } from "@/pages/profile";
import DataList from "@/shared/ui/data-list";
import Page from "@/shared/ui/page";
import { UserProfileSection } from "@/widgets/profile";

export const metadata: Metadata = {
  title: "Редактирование профиля",
};

export default async function ProfileEditPage() {
  const currentUser = await getCurrentUser();

  return (
    <Page>
      <ProfileEditPageBar />

      <Page.Content size="xl" className="gap-8">
        <UserProfileSection name={currentUser.username} />

        <DataList>
          <UserUpdateUsernameDataListItem value={currentUser.username} />
          <UserUpdatePasswordDataListItem />
        </DataList>

        <UserProfileLogoutButton />
      </Page.Content>
    </Page>
  );
}
