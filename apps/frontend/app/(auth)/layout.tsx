import { getCurrentUserOrUndefined } from "@/entities/user";
import { routes } from "@/shared/config/navigation";
import { redirectToNextURL } from "@/shared/lib/navigation";

export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  const currentUser = await getCurrentUserOrUndefined();

  if (currentUser) {
    await redirectToNextURL({ fallbackUrl: routes.home() });
    return;
  }

  return children;
}
