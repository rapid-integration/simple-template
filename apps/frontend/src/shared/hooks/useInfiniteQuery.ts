"use client";

import { useIntersection } from "@mantine/hooks";
import { useEffect, useState } from "react";

export type UseInfiniteQueryProps<T> = {
  fetch: (options: { limit: number; offset: number }) => Promise<T[]>;
  limit: number;
};

export const useInfiniteQuery = <T>({
  fetch,
  limit,
}: UseInfiniteQueryProps<T>) => {
  const [items, setItems] = useState<T[] | null>(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const { ref, entry } = useIntersection({ threshold: 0.1 });

  const load = async (offset: number) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const items = (await fetch({ limit, offset })) ?? [];

      setItems((prev) => [...(prev ?? []), ...items]);
      setOffset(offset + items.length);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const reset = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const items = (await fetch({ limit, offset: 0 })) ?? [];

      setItems(items);
      setOffset(items.length);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (entry?.isIntersecting) {
      load(offset);
    }
  }, [entry?.isIntersecting]);

  return { items, loading, error, ref, reset } as const;
};
