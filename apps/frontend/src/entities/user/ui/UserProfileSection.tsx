"use client";

import { FunctionComponent } from "react";

import Avatar from "@/shared/ui/avatar";

import { parseInitials } from "../lib/parseInitials";

interface UserProfileSectionProps {
  name: string;
}

const UserProfileSection: FunctionComponent<UserProfileSectionProps> = (
  props,
) => {
  return (
    <div className="space-y-3">
      <Avatar className="mx-auto size-24 text-4xl">
        <Avatar.Image
          src={`https://avatar.vercel.sh/${props.name}`}
          alt={props.name}
        />
        <Avatar.Fallback>{parseInitials(props.name)}</Avatar.Fallback>
      </Avatar>
      <hgroup className="text-center">
        <h2 className="text-3xl font-semibold md:text-2xl">{props.name}</h2>
      </hgroup>
    </div>
  );
};

export default UserProfileSection;
