import { Metadata } from "next";

import { getUser } from "@/entities/user";
import { routes } from "@/shared/config";

import { UserPageProps } from "../ui/UserPage";

export const generateMetadata = async ({
  params,
}: UserPageProps): Promise<Metadata> => {
  const { username } = routes.user.$parseParams(await params);

  const user = await getUser({ path: { username } });

  return {
    title: user ? user.username : "Пользователь не найден",
  };
};
