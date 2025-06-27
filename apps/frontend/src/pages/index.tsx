import Head from "next/head";

import { useScrolled } from "@/shared/hooks/use-scrolled";
import { cn } from "@/shared/lib/utils";
import { SidebarTrigger, useSidebar } from "@/shared/ui/sidebar";

export default function Home() {
  const { isMobile } = useSidebar();
  const scrolled = useScrolled();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {isMobile && (
        <div
          className={cn(
            "sticky top-0 z-10 grid h-13 w-full grid-cols-3 items-center border-b border-transparent bg-background/75 p-2 backdrop-blur-xl transition-colors md:text-sm",
            scrolled && "border-border",
          )}
        >
          <SidebarTrigger />
          <h1
            className={cn(
              "mx-auto font-medium opacity-0 transition-opacity",
              scrolled && "opacity-100",
            )}
          >
            Home
          </h1>
        </div>
      )}

      <h1 className="m-4 text-3xl font-semibold md:text-2xl">Home</h1>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video w-full rounded-xl bg-muted/50" />
          <div className="aspect-video w-full rounded-xl bg-muted/50" />
          <div className="aspect-video w-full rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
