import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Template",
  other: {
    google: "notranslate",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider
          theme={createTheme({ defaultRadius: "md" })}
          defaultColorScheme="light"
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
