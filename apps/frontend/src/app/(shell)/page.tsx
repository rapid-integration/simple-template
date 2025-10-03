import { Grid, GridCol, Skeleton, Stack, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <Stack component="hgroup">
      <Title order={1}>Главная</Title>

      <Grid grow>
        <GridCol span={{ base: 12, sm: 4 }}>
          <Skeleton flex={1} h={196} animate={false} />
        </GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>
          <Skeleton flex={1} h={196} animate={false} />
        </GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>
          <Skeleton flex={1} h={196} animate={false} />
        </GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>
          <Skeleton flex={1} h={196} animate={false} />
        </GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>
          <Skeleton flex={1} h={196} animate={false} />
        </GridCol>
      </Grid>
    </Stack>
  );
}
