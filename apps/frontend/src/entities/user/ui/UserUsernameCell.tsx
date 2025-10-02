import { ActionIcon, CopyButton } from "@mantine/core";
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
      leftSection={<TbAt size={24} />}
      label="Имя пользователя"
      value={value}
      rightSection={
        <CopyButton value={value}>
          {({ copied, copy }) => (
            <ActionIcon
              ms="auto"
              size="xl"
              variant="subtle"
              color={copied ? "teal" : "gray"}
              onClick={copy}
            >
              {copied ? <TbCheck size={24} /> : <TbCopy size={24} />}
            </ActionIcon>
          )}
        </CopyButton>
      }
      {...props}
    />
  );
};
