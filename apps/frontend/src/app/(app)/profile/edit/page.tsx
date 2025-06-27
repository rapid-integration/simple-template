import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser, UserProfileSection } from "@/entities/user";
import { logout } from "@/features/auth/logout";
import { UserUpdatePasswordDataListItem } from "@/features/user/update-password";
import { UserUpdateUsernameDataListItem } from "@/features/user/update-username";
import Bar from "@/shared/ui/bar";
import { Button } from "@/shared/ui/button";
import DataList from "@/shared/ui/data-list";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Edit Profile",
};

export default async function ProfileEditPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser.data) {
    return redirect("/login");
  }

  return (
    <Page>
      <Bar>
        <Bar.Start>
          <Button asChild variant="ghost" className="text-muted-foreground">
            <Link href="/profile">
              <ArrowLeftIcon />
              <span>Back</span>
            </Link>
          </Button>
        </Bar.Start>
        <Bar.Center>Edit Profile</Bar.Center>
      </Bar>

      <Page.Content size="xl" className="gap-8">
        <UserProfileSection
          avatar={`https://avatar.vercel.sh/${currentUser.data.username}`}
          name={currentUser.data.username}
        />

        <DataList>
          <UserUpdateUsernameDataListItem
            username={currentUser.data.username}
          />
          <UserUpdatePasswordDataListItem />
        </DataList>

        <Button
          className="text-destructive max-md:mt-auto"
          variant="outline"
          onClick={logout}
        >
          <LogOutIcon />
          <span>Logout</span>
        </Button>
      </Page.Content>
    </Page>
  );
}
