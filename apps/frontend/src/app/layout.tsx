import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";
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

export const metadata: Metadata = {
  title: "Template",
  other: {
    google: "notranslate",
  },
};

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider disableTransitionOnChange>
          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
