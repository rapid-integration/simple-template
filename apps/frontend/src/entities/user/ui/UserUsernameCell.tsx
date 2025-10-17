"use client";

import { ActionIcon, CopyButton, ThemeIcon, Tooltip } from "@mantine/core";
import {
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentCheck,
  HiMiniAtSymbol,
} from "react-icons/hi2";

import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserUsernameCellProps = CellProps & {
  value: string;
};

export const UserUsernameCell: React.FC<UserUsernameCellProps> = ({
  value,
  ...props
}) => {
  return (
    <Cell
      leftSection={
        <ThemeIcon variant="transparent">
          <HiMiniAtSymbol size={24} />
        </ThemeIcon>
      }
      label="Имя пользователя"
      value={value}
      rightSection={
        <CopyButton value={value}>
          {({ copied, copy }) => (
            <Tooltip
              label={
                copied
                  ? "Имя пользователя скопировано"
                  : "Скопировать имя пользователя"
              }
              position="left"
              arrowSize={8}
            >
              <ActionIcon size="input-sm" variant="default" onClick={copy}>
                {copied ? (
                  <HiOutlineClipboardDocumentCheck
                    size={24}
                    color="var(--mantine-color-green-text)"
                  />
                ) : (
                  <HiOutlineClipboardDocument size={24} />
                )}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      }
      {...props}
    />
  );
};
