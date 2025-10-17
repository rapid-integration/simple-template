import {
  Avatar,
  Card,
  CardProps,
  createPolymorphicComponent,
  Group,
  Text,
} from "@mantine/core";
import Link from "next/link";

import { UserResponse } from "@/shared/api";
import { routes } from "@/shared/config";

import classNames from "./UserCard.module.css";

export type UserCardProps = CardProps & {
  user: UserResponse;
  back?: string | undefined;
};

export const UserCard = createPolymorphicComponent<"div", UserCardProps>(
  ({ user, back, ...props }: UserCardProps) => {
    return (
      <Card
        component={Link}
        href={routes.user({
          username: user.username,
          search: back ? { back } : undefined,
        })}
        classNames={classNames}
        {...props}
      >
        <Group>
          <Avatar name={user.username} color="initials" variant="filled" />
          <Text>{user.username}</Text>
        </Group>
      </Card>
    );
  },
);
