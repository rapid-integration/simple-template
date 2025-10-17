import { Stack, ThemeIcon, Title } from "@mantine/core";
import { FaSpider } from "react-icons/fa6";

import { Empty } from "@/shared/ui/Empty";

export const HomePage: React.FC = () => {
  return (
    <Stack>
      <Title order={1} size="h2">
        Главная
      </Title>

      <Empty
        my="xl"
        topSection={
          <ThemeIcon w={64} h={64} variant="transparent" mx="auto">
            <FaSpider size={64} />
          </ThemeIcon>
        }
        label="Тут пусто"
        description="Фантазия закончилась"
      />
    </Stack>
  );
};
