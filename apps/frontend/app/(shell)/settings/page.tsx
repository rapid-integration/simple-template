import { Metadata } from "next";

import { getCurrentUser } from "@/entities/user";
import { UserProfile } from "@/widgets/profile";

export const metadata: Metadata = {
  title: "Настройки",
};

export default async function SettingsPage() {
  const currentUser = await getCurrentUser();

  return <UserProfile user={currentUser} />;
}
