"use client";

import { LoaderIcon, LogOutIcon } from "lucide-react";
import {
  ComponentProps,
  FunctionComponent,
  startTransition,
  useActionState,
} from "react";

import { Button } from "@/shared/ui/button";

import { logout } from "../api/actions";

interface UserProfileLogoutButtonProps extends ComponentProps<typeof Button> {}

const UserProfileLogoutButton: FunctionComponent<
  UserProfileLogoutButtonProps
> = () => {
  const [, action, pending] = useActionState(logout, undefined);

  return (
    <Button
      className="text-destructive max-md:mt-auto"
      variant="outline"
      disabled={pending}
      onClick={() => startTransition(action)}
    >
      {pending ? <LoaderIcon className="animate-spin" /> : <LogOutIcon />}
      <span>{pending ? "Logging out…" : "Logout"}</span>
    </Button>
  );
};

export default UserProfileLogoutButton;
