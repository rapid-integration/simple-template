"use client";

import {
  ActionIcon,
  CopyButton,
  Skeleton,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import { TbCalendarPlus, TbCheck, TbCopy } from "react-icons/tb";

import useDateTimeFormat from "@/shared/hooks/useDateTimeFormat";
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
      leftSection={
        <ThemeIcon color="blue" variant="transparent">
          <TbCalendarPlus size={24} />
        </ThemeIcon>
      }
      label="Дата регистрации"
      value={displayDate !== "" ? displayDate : <Skeleton w={192} h={24.8} />}
      rightSection={
        displayDate ? (
          <CopyButton value={displayDate}>
            {({ copied, copy }) => (
              <Tooltip
                label={
                  copied
                    ? "Дата регистрации скопирована"
                    : "Скопировать дату регистрации"
                }
                position="left"
                withArrow
                arrowSize={8}
              >
                <ActionIcon
                  size="input-sm"
                  style={{ color: "var(--mantine-color-gray-text)" }}
                  variant="default"
                  onClick={copy}
                >
                  {copied ? <TbCheck size={24} /> : <TbCopy size={24} />}
                </ActionIcon>
              </Tooltip>
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
