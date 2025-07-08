import { Metadata } from "next";

import { ProfilePageBar } from "@/pages/profile";
import Page from "@/shared/ui/page";
import Skeleton from "@/shared/ui/skeleton";

export const metadata: Metadata = {
  title: "Профиль",
};

export default function Loading() {
  return (
    <Page>
      <ProfilePageBar />

      <Page.Content size="xl" className="gap-8">
        <div className="space-y-3">
          <Skeleton className="mx-auto size-24 rounded-full" />
          <Skeleton className="mx-auto h-8 w-1/2" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-17.5 w-full" />
          <Skeleton className="h-34.75 w-full" />
        </div>
      </Page.Content>
    </Page>
  );
}
