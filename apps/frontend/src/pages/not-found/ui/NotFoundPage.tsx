import { Button, Center, ThemeIcon } from "@mantine/core";
import Link from "next/link";
import { HiMiniArrowLeft, HiMiniNoSymbol } from "react-icons/hi2";

import { routes } from "@/shared/config";
import { Empty } from "@/shared/ui/Empty";

export const NotFoundPage: React.FC = () => {
  return (
    <Center w="100dvw" h="100dvh" my="auto">
      <Empty
        topSection={
          <ThemeIcon size={96} variant="transparent">
            <HiMiniNoSymbol size={96} />
          </ThemeIcon>
        }
        label="Страница не найдена"
        description="Этой страницы не существует."
        bottomSection={
          <Button
            component={Link}
            href={routes.home()}
            leftSection={<HiMiniArrowLeft size={24} />}
          >
            На главную
          </Button>
        }
      />
    </Center>
  );
};
