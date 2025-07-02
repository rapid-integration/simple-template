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
    format: "d MMMM yyyy HH:mm",
  });

  return (
    <DataList orientation="horizontal">
      <DataList.Item>
        <DataList.ItemGroup>
          <DataList.ItemLabel>Дата регистрации</DataList.ItemLabel>
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
                  toast.success("Дата регистрации скопироана!");
                } else {
                  toast.error(
                    "Не удалось скопировать дату регистрации: окно браузера используется в небезопасном контексте.",
                  );
                }
              }}
            >
              <CopyIcon />
              <span className="sr-only">Скопировать дату регистрации</span>
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">
            Скопировать дату регистрации
          </Tooltip.Content>
        </Tooltip>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemGroup className="overflow-hidden">
          <DataList.ItemLabel>Идентификатор</DataList.ItemLabel>
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
                  toast.success("Идентификатор скопирован!");
                } else {
                  toast.error(
                    "Не удалось скопировать идентификатор: окно браузера используется в небезопасном контексте.",
                  );
                }
              }}
            >
              <CopyIcon />
              <span className="sr-only">Скопировать идентификатор</span>
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">Скопировать идентификатор</Tooltip.Content>
        </Tooltip>
      </DataList.Item>
    </DataList>
  );
};

export default UserProfileInfo;
