import { Stack, Text, Title } from "@mantine/core";

export const HomePage: React.FC = () => {
  return (
    <Stack component="hgroup">
      <Title order={1} size="h2">
        Главная
      </Title>
      <Text>Тут пока что пусто :(</Text>
    </Stack>
  );
};
