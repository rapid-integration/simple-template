"use client";

import { ActionIcon, CopyButton, ThemeIcon, Tooltip } from "@mantine/core";
import { TbCheck, TbCopy, TbHash } from "react-icons/tb";

import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserIdCellProps = Omit<CellProps, "value"> & {
  value: string;
};

export const UserIdCell: React.FC<UserIdCellProps> = ({
  value,
  ...otherProps
}) => {
  return (
    <Cell
      leftSection={
        <ThemeIcon color="blue" variant="transparent">
          <TbHash size={24} />
        </ThemeIcon>
      }
      label="Идентификатор"
      value={value}
      rightSection={
        <CopyButton value={value}>
          {({ copied, copy }) => (
            <Tooltip
              label={
                copied
                  ? "Идентификатор скопирован"
                  : "Скопировать идентификатор"
              }
              position="left"
              withArrow
              arrowSize={8}
            >
              <ActionIcon
                size="input-sm"
                style={{
                  color: `var(--mantine-color-${copied ? "green" : "gray"}-text)`,
                }}
                variant="default"
                onClick={copy}
              >
                {copied ? <TbCheck size={24} /> : <TbCopy size={24} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      }
      {...otherProps}
    />
  );
};
