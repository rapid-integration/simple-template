import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

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

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        data-vaul-drawer-wrapper
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider disableTransitionOnChange>
          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
