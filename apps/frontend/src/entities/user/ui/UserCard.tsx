import {
  Avatar,
  Card,
  CardProps,
  createPolymorphicComponent,
  Group,
  Text,
} from "@mantine/core";

import { UserResponse } from "@/shared/api";

export type UserCardProps = CardProps & {
  user: UserResponse;
};

export const UserCard = createPolymorphicComponent<"div", UserCardProps>(
  ({ user, ...props }: UserCardProps) => {
    return (
      <Card withBorder {...props}>
        <Group>
          <Avatar name={user.username} color="initials" />
          <Text>{user.username}</Text>
        </Group>
      </Card>
    );
  },
);
