"use client";

import {
  Button,
  Loader,
  Paper,
  SimpleGrid,
  Stack,
  StackProps,
  ThemeIcon,
} from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import { FaSpider } from "react-icons/fa6";
import { MdFilterListOff } from "react-icons/md";

import { getUsers, UserCard } from "@/entities/user";
import { routes } from "@/shared/config";
import { useInfiniteQuery } from "@/shared/lib/query";
import { Empty } from "@/shared/ui/Empty";
import { SearchTextInput } from "@/shared/ui/SearchTextInput";

export type UsersInfiniteListProps = StackProps & { limit: number };

export const UsersInfiniteList: React.FC<UsersInfiniteListProps> = ({
  limit,
  ...props
}) => {
  const [debouncedQuery, setDebouncedQuery] = useDebouncedState("", 300);
  const [q, setQ] = useQueryState("q");

  const { items, loading, ref, reset } = useInfiniteQuery({
    limit,
    fetch: ({ limit, offset }) => getUsers({ q, limit, offset }),
  });

  useEffect(() => {
    reset();
    setDebouncedQuery(q ?? "");
  }, [q]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setQ(debouncedQuery || null);
  }, [debouncedQuery]);

  return (
    <Stack gap={4} {...props}>
      <Paper
        py="xs"
        radius={0}
        style={{
          position: "sticky",
          top: "var(--app-shell-header-height)",
          zIndex: 100,
        }}
      >
        <SearchTextInput
          id="users-infinite-list-search-text-input"
          name="users-infinite-list-search-text-input"
          size="md"
          loading={loading && items !== null}
          value={q ?? undefined}
          onValueChange={setDebouncedQuery}
          placeholder="Поиск"
          aria-label="Поиск"
        />
      </Paper>

      <Stack gap={0} pt={2}>
        {items === null && <Loader size="lg" my="xl" mx="auto" />}

        {items?.length === 0 && (
          <Empty
            my="xl"
            topSection={
              <ThemeIcon w={64} h={64} variant="transparent" mx="auto">
                <FaSpider size={64} />
              </ThemeIcon>
            }
            label="Ничего не найдено"
            description="Попробуйте другие критерии поиска"
            bottomSection={
              <Button
                mx="auto"
                variant="default"
                onClick={() => {
                  setQ("");
                }}
                leftSection={<MdFilterListOff size={24} />}
              >
                Сбросить фильтры
              </Button>
            }
          />
        )}

        {!!items?.length && (
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xs">
            {items?.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                back={q ? routes.users({ search: { q } }) : undefined}
              />
            ))}
          </SimpleGrid>
        )}

        <div id="users-infinite-list-load-trigger" ref={ref} />
      </Stack>
    </Stack>
  );
};
