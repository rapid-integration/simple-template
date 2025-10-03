import { getCurrentUser } from "@/entities/user";
import { Shell } from "@/widgets/shell";

export default async function ShellLayout({
  children,
}: React.PropsWithChildren) {
  const currentUser = await getCurrentUser();

  return <Shell currentUser={currentUser}>{children}</Shell>;
}
