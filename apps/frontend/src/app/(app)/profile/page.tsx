import { format } from "date-fns";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser, UserProfile } from "@/entities/user";
import Bar from "@/shared/ui/bar";
import { Button } from "@/shared/ui/button";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const currentUser = await getCurrentUser();

  if (!currentUser.data) {
    return redirect("/login");
  }

  return (
    <Page>
      <Bar>
        <Bar.Start>
          <Button asChild variant="ghost" className="text-muted-foreground">
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
          avatar={`https://avatar.vercel.sh/${currentUser.data.username}`}
          name={currentUser.data.username}
          registrationDate={format(currentUser.data.created_at, "dd.MM.yyyy")}
          id={currentUser.data.id}
        />
      </Page.Content>
    </Page>
  );
}
