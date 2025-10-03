"use client";

import { Loader, Paper, Stack, StackProps, ThemeIcon } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import Link from "next/link";
import { useEffect } from "react";
import { TbUserCancel } from "react-icons/tb";

import { getUsers, UserCard } from "@/entities/user";
import { routes } from "@/shared/config/navigation";
import { useInfiniteQuery } from "@/shared/hooks/useInfiniteQuery";
import { Empty } from "@/shared/ui/Empty";
import { SearchTextInput } from "@/shared/ui/SearchTextInput";

export type UsersInfiniteListProps = StackProps & { limit: number };

export const UsersInfiniteList: React.FC<UsersInfiniteListProps> = ({
  limit,
  ...props
}) => {
  const [q, setDebounchedQuery] = useDebouncedState("", 300);

  const { items, loading, ref, reset } = useInfiniteQuery({
    limit,
    fetch: ({ limit, offset }) => getUsers({ q, limit, offset }),
  });

  useEffect(() => {
    reset();
  }, [q]);

  return (
    <Stack gap="sm" {...props}>
      <Paper
        py="xs"
        radius={0}
        style={{
          position: "sticky",
          top: "calc(var(--app-shell-header-height))",
          zIndex: 100,
        }}
      >
        <SearchTextInput
          id="users-infinite-list-search-text-input"
          name="users-infinite-list-search-text-input"
          size="md"
          loading={loading && items !== null}
          onValueChange={setDebounchedQuery}
          placeholder="Поиск пользователей…"
        />
      </Paper>

      <Stack gap="xs">
        {items === null && <Loader size="lg" my="xl" mx="auto" />}

        {items?.length === 0 && (
          <Empty
            my="xl"
            topSection={
              <ThemeIcon w={64} h={64} variant="transparent" mx="auto">
                <TbUserCancel size={64} />
              </ThemeIcon>
            }
            label="Пользователи не найдены"
            description="Пользователи с такими параметрами не найдены"
          />
        )}

        {items?.map((user) => (
          <UserCard
            key={user.id}
            component={Link}
            href={routes.user({ username: user.username })}
            user={user}
          />
        ))}

        <div ref={ref} />
      </Stack>
    </Stack>
  );
};
