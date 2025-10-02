"use client";

import { ActionIcon, CopyButton, Skeleton } from "@mantine/core";
import { TbCalendarPlus, TbCheck, TbCopy } from "react-icons/tb";

import useDateTimeFormat from "@/shared/hooks/use-date-time-format";
import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserCreatedAtCellProps = CellProps & {
  value: string;
};

export const UserCreatedAtCell: React.FC<UserCreatedAtCellProps> = ({
  value,
  ...otherProps
}) => {
  const displayDate = useDateTimeFormat({
    value,
    locales: "ru",
    options: {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    },
  });

  return (
    <Cell
      leftSection={<TbCalendarPlus size={24} />}
      label="Дата регистрации"
      value={displayDate !== "" ? displayDate : <Skeleton w={192} h={24} />}
      rightSection={
        displayDate ? (
          <CopyButton value={displayDate}>
            {({ copied, copy }) => (
              <ActionIcon
                size="input-sm"
                variant="subtle"
                color={copied ? "teal" : "gray"}
                onClick={copy}
              >
                {copied ? <TbCheck size={24} /> : <TbCopy size={24} />}
              </ActionIcon>
            )}
          </CopyButton>
        ) : (
          <Skeleton w={36} h={36} />
        )
      }
      {...otherProps}
    />
  );
};
