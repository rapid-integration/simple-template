import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import theme from "@/shared/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export type SiteLayoutProps = React.PropsWithChildren;

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <html lang="ru" className={inter.variable} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <NuqsAdapter>
          <MantineProvider theme={theme} defaultColorScheme="auto">
            <Notifications limit={3} position="bottom-center" />

            {children}
          </MantineProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
};
