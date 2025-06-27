import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { user, UserProfile } from "@/entities/user";
import Bar from "@/shared/ui/bar";
import { Button } from "@/shared/ui/button";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Profile() {
  "use client";

  return (
    <Page>
      <Bar>
        <Bar.Start>
          <Button
            asChild
            variant="ghost"
            className="justify-self-start text-muted-foreground"
          >
            <Link href="/">
              <ArrowLeftIcon />
              <span>Back</span>
            </Link>
          </Button>
        </Bar.Start>
        <Bar.Center showAfterScrolled>Profile</Bar.Center>
        <Bar.End>
          <Button asChild variant="ghost" className="justify-self-end">
            <Link href="/profile/edit">Edit</Link>
          </Button>
        </Bar.End>
      </Bar>

      <Page.Content size="xl">
        <UserProfile
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          registrationDate={user.registrationDate}
          id={user.id}
          about={user.about}
        />
      </Page.Content>
    </Page>
  );
}
