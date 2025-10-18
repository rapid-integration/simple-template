import { Stack, ThemeIcon, Title } from "@mantine/core";
import { HiNoSymbol } from "react-icons/hi2";

import { Empty } from "@/shared/ui/Empty";

export const HomePage: React.FC = () => {
  return (
    <Stack>
      <Title order={1} size="h3">
        Главная
      </Title>

      <Empty
        my="xl"
        topSection={
          <ThemeIcon size="xl" variant="default">
            <HiNoSymbol size={24} />
          </ThemeIcon>
        }
        label="Тут пусто"
        description="Это можно на что-то заменить."
      />
    </Stack>
  );
};
