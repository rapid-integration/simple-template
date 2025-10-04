import { Button, Center, ThemeIcon } from "@mantine/core";
import Link from "next/link";
import { LuTrafficCone } from "react-icons/lu";
import { TbArrowLeft } from "react-icons/tb";

import { routes } from "@/shared/config";
import { Empty } from "@/shared/ui/Empty";

export const NotFoundPage: React.FC = () => {
  return (
    <Center w="100dvw" h="100dvh" my="auto">
      <Empty
        topSection={
          <ThemeIcon w={96} h={96} variant="transparent" mx="auto">
            <LuTrafficCone size={96} />
          </ThemeIcon>
        }
        label="Страница не найдена"
        description="Этой страницы не существует"
        bottomSection={
          <Button
            component={Link}
            href={routes.home()}
            size="md"
            mx="auto"
            leftSection={<TbArrowLeft size={24} />}
          >
            На главную
          </Button>
        }
      />
    </Center>
  );
};
