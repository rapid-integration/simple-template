"use client";

import { CopyIcon } from "lucide-react";
import { FunctionComponent } from "react";
import { toast } from "sonner";

import useDateTimeFormat from "@/shared/hooks/use-date-time-format";
import Button from "@/shared/ui/button";
import DataList from "@/shared/ui/data-list";
import Skeleton from "@/shared/ui/skeleton";
import Tooltip from "@/shared/ui/tooltip";

interface UserProfileInfoProps {
  created_at: string;
  id: string;
}

const UserProfileInfo: FunctionComponent<UserProfileInfoProps> = (props) => {
  const displayDate = useDateTimeFormat({
    date: props.created_at,
    format: "dd MMMM yyyy HH:mm",
  });

  return (
    <DataList orientation="horizontal">
      <DataList.Item>
        <DataList.ItemGroup>
          <DataList.ItemLabel>Registration date</DataList.ItemLabel>
          <DataList.ItemValue>
            {displayDate || <Skeleton className="h-6" />}
          </DataList.ItemValue>
        </DataList.ItemGroup>
        <Tooltip disableHoverableContent>
          <Tooltip.Trigger asChild>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                if (window.isSecureContext && displayDate) {
                  navigator.clipboard.writeText(displayDate);
                  toast.success("Registration date copied to the clipboard!");
                } else {
                  toast.error(
                    "Failed to copy registration date to clipboard: window is not in a secure context.",
                  );
                }
              }}
            >
              <CopyIcon />
              <span className="sr-only">Copy</span>
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">
            Copy registration date to clipboard
          </Tooltip.Content>
        </Tooltip>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemGroup className="overflow-hidden">
          <DataList.ItemLabel>ID</DataList.ItemLabel>
          <DataList.ItemValue className="truncate font-mono">
            {props.id}
          </DataList.ItemValue>
        </DataList.ItemGroup>
        <Tooltip disableHoverableContent>
          <Tooltip.Trigger asChild>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                if (window.isSecureContext) {
                  navigator.clipboard.writeText(props.id);
                  toast.success("ID copied to the clipboard!");
                } else {
                  toast.error(
                    "Failed to copy ID to clipboard: window is not in a secure context.",
                  );
                }
              }}
            >
              <CopyIcon />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">Copy ID to clipboard</Tooltip.Content>
        </Tooltip>
      </DataList.Item>
    </DataList>
  );
};

export default UserProfileInfo;
