"use client";

import { CopyIcon } from "lucide-react";
import { FunctionComponent } from "react";
import { toast } from "sonner";

import { Button } from "@/shared/ui/button";
import DataList from "@/shared/ui/data-list";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

interface UserProfileInfoProps {
  registrationDate: string;
  id: string;
}

const UserProfileInfo: FunctionComponent<UserProfileInfoProps> = (props) => {
  return (
    <DataList orientation="horizontal">
      <DataList.Item>
        <DataList.ItemGroup>
          <DataList.ItemLabel>Registration date</DataList.ItemLabel>
          <DataList.ItemValue>{props.registrationDate}</DataList.ItemValue>
        </DataList.ItemGroup>
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                if (window.isSecureContext) {
                  navigator.clipboard.writeText(props.registrationDate);
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
          </TooltipTrigger>
          <TooltipContent side="left">
            Copy registration date to clipboard
          </TooltipContent>
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
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent side="left">Copy ID to clipboard</TooltipContent>
        </Tooltip>
      </DataList.Item>
    </DataList>
  );
};

export default UserProfileInfo;
