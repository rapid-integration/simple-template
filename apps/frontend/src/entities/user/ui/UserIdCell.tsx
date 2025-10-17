"use client";

import { ActionIcon, CopyButton, ThemeIcon, Tooltip } from "@mantine/core";
import {
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentCheck,
  HiMiniHashtag,
} from "react-icons/hi2";

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
        <ThemeIcon variant="transparent">
          <HiMiniHashtag size={24} />
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
      {...otherProps}
    />
  );
};
