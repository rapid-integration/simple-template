import { Metadata } from "next";

import Page from "@/shared/ui/page";
import { Skeleton } from "@/shared/ui/skeleton";
import { ProfileEditPageBar } from "@/views/profile";

export const metadata: Metadata = {
  title: "Edit Profile",
};

export default function Loading() {
  return (
    <Page>
      <ProfileEditPageBar />
      <Page.Content size="xl" className="gap-8">
        <div className="space-y-3">
          <Skeleton className="mx-auto size-24 rounded-full" />
          <Skeleton className="mx-auto h-8 w-1/2" />
        </div>
        <Skeleton className="h-34.75 w-full" />
        <Skeleton className="h-8 w-full max-md:mt-auto" />
      </Page.Content>
    </Page>
  );
}
