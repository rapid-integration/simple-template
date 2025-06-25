import { SidebarTrigger, useSidebar } from "@/shared/ui/sidebar";
import Head from "next/head";

export default function Home() {
  const { isMobile } = useSidebar();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {isMobile && (
        <header className="sticky top-0 w-full grid grid-cols-3 items-center p-2 h-13">
          <SidebarTrigger />
        </header>
      )}

      <h1 className="font-semibold text-3xl m-4">Home</h1>
    </>
  );
}
