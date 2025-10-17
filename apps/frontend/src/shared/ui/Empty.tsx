"use client";

import { Group, Stack, StackProps, Text, Title } from "@mantine/core";

export type EmptyProps = StackProps & {
  topSection?: React.ReactNode;
  label: React.ReactNode;
  description: React.ReactNode;
  bottomSection?: React.ReactNode;
};

export const Empty: React.FC<EmptyProps> = ({
  topSection,
  label,
  description,
  bottomSection,
  ...props
}) => {
  return (
    <Stack gap="md" {...props}>
      {topSection && <Group>{topSection}</Group>}

      <Stack component="hgroup" gap="xs">
        <Title size="h2" ta="center">
          {label}
        </Title>
        <Text ta="center">{description}</Text>
      </Stack>

      {bottomSection && <Group>{bottomSection}</Group>}
    </Stack>
  );
};
