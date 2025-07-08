"use client";

import { EditIcon } from "lucide-react";
import { ComponentProps, FunctionComponent, useState } from "react";

import { UserUsernameDataListItem } from "@/entities/user";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import Button from "@/shared/ui/button";
import Dialog from "@/shared/ui/dialog";
import Drawer from "@/shared/ui/drawer";
import Tooltip from "@/shared/ui/tooltip";

import UserUpdateUsernameForm from "./UserUpdateUsernameForm";

interface UserUpdateUsernameDataListItemProps
  extends Omit<ComponentProps<typeof UserUsernameDataListItem>, "action"> {}

const UserUpdateUsernameDataListItem: FunctionComponent<
  UserUpdateUsernameDataListItemProps
> = ({ value: username, ...otherProps }) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const Root = isMobile ? Drawer : Dialog;

  return (
    <UserUsernameDataListItem
      value={username}
      action={
        <Root open={open} onOpenChange={setOpen} autoFocus={isMobile}>
          <Tooltip disableHoverableContent>
            <Tooltip.Trigger asChild>
              <Root.Trigger asChild>
                <Button variant="outline" size="icon">
                  <EditIcon />
                  <span className="sr-only">
                    Редактировать имя пользователя
                  </span>
                </Button>
              </Root.Trigger>
            </Tooltip.Trigger>
            <Tooltip.Content side="left">
              Редактировать имя пользователя
            </Tooltip.Content>
          </Tooltip>

          <Root.Content>
            <Root.Header>
              <Root.Title>Редактирование имени пользователя</Root.Title>
              <Root.Description>
                Вы можете установить публичное имя пользователя.
              </Root.Description>
            </Root.Header>
            <UserUpdateUsernameForm
              defaultValues={{ username }}
              onSuccess={() => setOpen(false)}
              className={isMobile ? "px-4" : undefined}
            />
            {isMobile && (
              <Root.Footer className="pt-2">
                <Root.Close asChild>
                  <Button variant="outline">Закрыть</Button>
                </Root.Close>
              </Root.Footer>
            )}
          </Root.Content>
        </Root>
      }
      {...otherProps}
    />
  );
};

export default UserUpdateUsernameDataListItem;
