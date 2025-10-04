import { getCurrentUser } from "@/entities/user";

import { Shell } from "./Shell";

export type ShellLayoutProps = React.PropsWithChildren;

export const ShellLayout: React.FC<ShellLayoutProps> = async ({ children }) => {
  const currentUser = await getCurrentUser();

  return <Shell currentUser={currentUser}>{children}</Shell>;
};
