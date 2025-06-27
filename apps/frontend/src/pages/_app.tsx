import { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { Toaster } from "@/shared/ui/sonner";
import { AppSidebar } from "@/widgets/sidebar";

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
        <AppSidebar />
        <SidebarInset
          data-vaul-drawer-wrapper
          className={`${geistSans.variable} ${geistMono.variable}`}
        >
          <Component {...pageProps} />
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </ThemeProvider>
  );
}
