import { Metadata } from "next";

import { HomePageBar } from "@/pages/home";
import Page from "@/shared/ui/page";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <Page>
      <HomePageBar />

      <Page.Content size="4xl">
        <h1 className="text-3xl font-semibold md:text-2xl">Главная</h1>

        <div className="flex flex-1 flex-col gap-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video w-full rounded-xl bg-muted/50" />
            <div className="aspect-video w-full rounded-xl bg-muted/50" />
            <div className="aspect-video w-full rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </Page.Content>
    </Page>
  );
}
