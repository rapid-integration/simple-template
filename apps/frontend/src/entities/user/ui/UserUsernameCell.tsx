import { ActionIcon, CopyButton, ThemeIcon, Tooltip } from "@mantine/core";
import { TbAt, TbCheck, TbCopy } from "react-icons/tb";

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
        <ThemeIcon color="blue" variant="transparent">
          <TbAt size={24} />
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
      }
      {...props}
    />
  );
};
