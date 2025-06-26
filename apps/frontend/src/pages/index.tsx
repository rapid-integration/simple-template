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
            "sticky top-0 z-10 grid h-13 w-full grid-cols-3 items-center border-b border-transparent bg-background/75 p-2 backdrop-blur-xl transition-colors",
            scrolled && "border-border"
          )}
        >
          <SidebarTrigger />
        </div>
      )}

      <h1 className="font-semibold text-3xl m-4">Home</h1>
    </>
  );
}
