import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import theme from "@/shared/theme";
import { Hotkeys } from "@/widgets/hotkeys";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontClassNames = `${inter.variable} ${jetBrainsMono.variable}`;

export type SiteLayoutProps = React.PropsWithChildren;

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <html lang="ru" className={fontClassNames} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <NuqsAdapter>
          <MantineProvider theme={theme} defaultColorScheme="auto">
            <Notifications limit={3} position="bottom-center" />
            <Hotkeys />

            {children}
          </MantineProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
};
