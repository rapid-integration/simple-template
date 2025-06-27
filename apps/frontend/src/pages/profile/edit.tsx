import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

import { user, UserProfileSection } from "@/entities/user";
import { UserUpdatePasswordDataListItem } from "@/features/user/update-password";
import { UserUpdateUsernameDataListItem } from "@/features/user/update-username";
import Bar from "@/shared/ui/bar";
import { Button } from "@/shared/ui/button";
import DataList from "@/shared/ui/data-list";
import Page from "@/shared/ui/page";

export default function ProfileEdit() {
  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>

      <Page>
        <Bar>
          <Bar.Start>
            <Button
              asChild
              variant="ghost"
              className="justify-self-start text-muted-foreground"
            >
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
            avatar={user.avatar}
            name={user.name}
            email={user.email}
          />

          <DataList>
            <UserUpdateUsernameDataListItem username={user.username} />
            <UserUpdatePasswordDataListItem />
          </DataList>

          <Button className="text-destructive max-md:mt-auto" variant="outline">
            <LogOutIcon />
            <span>Logout</span>
          </Button>
        </Page.Content>
      </Page>
    </>
  );
}
