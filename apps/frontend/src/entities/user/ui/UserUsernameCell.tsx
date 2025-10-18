"use client";

import {
  ActionIcon,
  CopyButton,
  ThemeIcon,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import {
  HiMiniAtSymbol,
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

import { Cell, CellProps } from "@/shared/ui/Cell";

export type UserUsernameCellProps = CellProps & {
  value: string;
};

export const UserUsernameCell: React.FC<UserUsernameCellProps> = ({
  value,
  ...props
}) => {
  const theme = useMantineTheme();

  return (
    <Cell
      leftSection={
        <ThemeIcon
          size="lg"
          variant="gradient"
          gradient={{ from: theme.colors.blue[6], to: theme.colors.blue[4] }}
        >
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
