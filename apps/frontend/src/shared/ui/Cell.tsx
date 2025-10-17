"use client";

import { Group, Text, GroupProps, Stack } from "@mantine/core";

export type CellProps = GroupProps & {
  label?: React.ReactNode;
  value?: React.ReactNode;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
};

export const Cell: React.FC<CellProps> = ({
  label,
  value,
  leftSection,
  rightSection,
  ...props
}) => {
  return (
    <Group px="md" py="xs" {...props}>
      {leftSection && <Group gap="xs">{leftSection}</Group>}
      <Stack gap={0} miw={0} flex={1}>
        <Text component="div" fw={600}>
          {label}
        </Text>
        <Text component="div" truncate>
          {value}
        </Text>
      </Stack>
      {rightSection && (
        <Group gap="xs" ms="auto">
          {rightSection}
        </Group>
      )}
    </Group>
  );
};
