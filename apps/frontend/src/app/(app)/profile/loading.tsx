"use client";

import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import Bar from "@/shared/ui/bar";
import { Button } from "@/shared/ui/button";
import Page from "@/shared/ui/page";
import { Skeleton } from "@/shared/ui/skeleton";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Loading() {
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
          <Skeleton className="h-9 w-14" />
        </Bar.End>
      </Bar>
      <Page.Content size="xl" className="gap-8">
        <div className="space-y-3">
          <Skeleton className="mx-auto size-24 rounded-full" />
          <Skeleton className="mx-auto h-8 w-1/2" />
        </div>
        <Skeleton className="h-34.75 w-full" />
      </Page.Content>
    </Page>
  );
}
