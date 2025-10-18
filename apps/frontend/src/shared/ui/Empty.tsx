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
    <Stack {...props}>
      {topSection && <Group justify="center">{topSection}</Group>}

      <Stack component="hgroup" gap={4}>
        <Title size="h3" ta="center">
          {label}
        </Title>
        <Text ta="center" fz="sm" c="dimmed">
          {description}
        </Text>
      </Stack>

      {bottomSection && (
        <Group mt="xs" justify="center">
          {bottomSection}
        </Group>
      )}
    </Stack>
  );
};
