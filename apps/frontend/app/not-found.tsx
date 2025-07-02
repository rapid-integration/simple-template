import { ArrowLeftIcon, TrafficConeIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import Button from "@/shared/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex grow flex-col items-center justify-center gap-4">
      <TrafficConeIcon className="size-24" />
      <hgroup className="space-y-1.5 text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-lg text-muted-foreground">
          This page does not exist
        </p>
      </hgroup>
      <Button asChild size="lg">
        <Link href="/">
          <ArrowLeftIcon />
          <span>Go to home</span>
        </Link>
      </Button>
    </main>
  );
}
