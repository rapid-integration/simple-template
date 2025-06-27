import { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { AppSidebar } from "@/shared/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { Toaster } from "@/shared/ui/sonner";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange>
      <SidebarProvider>
        {/* <SiteHeader /> */}
        {/* <div className="flex flex-1"> */}
        <AppSidebar />
        <SidebarInset
          data-vaul-drawer-wrapper
          className={`${geistSans.variable} ${geistMono.variable}`}
        >
          <Component {...pageProps} />
        </SidebarInset>
        {/* </div> */}
      </SidebarProvider>
      <Toaster />
    </ThemeProvider>
  );
}
