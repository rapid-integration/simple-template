import { ArrowLeftIcon, TrafficConeIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import Button from "@/shared/ui/button";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <main className="flex grow flex-col items-center justify-center gap-4">
      <TrafficConeIcon className="size-24" />
      <hgroup className="space-y-1.5 text-center">
        <h1 className="text-3xl font-semibold">Страница не найдена</h1>
        <p className="text-lg text-muted-foreground">
          Этой страницы не существует
        </p>
      </hgroup>
      <Button asChild size="lg">
        <Link href="/">
          <ArrowLeftIcon />
          <span>На главную</span>
        </Link>
      </Button>
    </main>
  );
}
