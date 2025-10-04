import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import theme from "@/shared/theme";

export type SiteLayoutProps = React.PropsWithChildren;

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Notifications />

          {children}
        </MantineProvider>
      </body>
    </html>
  );
};
