import { ComponentType } from "react";

import { CurrentUserResponse } from "@/shared/api/types";

import { getCurrentUser } from "../api/cache";

export type WithCurrentUserProps = {
  currentUser: CurrentUserResponse;
};

export default function withCurrentUser<T extends WithCurrentUserProps>(
  Component: ComponentType<T>,
) {
  const WithCurrentUser = async (
    props: Omit<T, keyof WithCurrentUserProps>,
  ) => {
    const { response, data: currentUser } = await getCurrentUser();

    if (response.ok) {
      return <Component {...({ ...props, currentUser } as T)} />;
    }
  };

  const componentDisplayName = Component.displayName || Component.name;
  WithCurrentUser.displayName = `withCurrentUser(${componentDisplayName})`;

  return WithCurrentUser;
}
