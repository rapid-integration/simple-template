import { useScrolled } from "@/shared/hooks/use-scrolled";
import { cn } from "@/shared/lib/utils";
import { SidebarTrigger, useSidebar } from "@/shared/ui/sidebar";
import Head from "next/head";

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
            scrolled && "border-border"
          )}
        >
          <SidebarTrigger />
        </div>
      )}

      <h1 className="font-semibold text-3xl md:text-2xl m-4">Home</h1>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video w-full rounded-xl" />
          <div className="bg-muted/50 aspect-video w-full rounded-xl" />
          <div className="bg-muted/50 aspect-video w-full rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </>
  );
}
