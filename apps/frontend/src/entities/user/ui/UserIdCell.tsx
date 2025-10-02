import { ActionIcon, CopyButton } from "@mantine/core";
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
      leftSection={<TbHash size={24} />}
      label="Идентификатор"
      value={value}
      rightSection={
        <CopyButton value={value}>
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
      }
      {...otherProps}
    />
  );
};
