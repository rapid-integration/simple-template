import { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";
import { Toaster } from "@/shared/ui/sonner";

import "@/app/styles";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
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
      className={cn(inter.variable, firaCode.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
