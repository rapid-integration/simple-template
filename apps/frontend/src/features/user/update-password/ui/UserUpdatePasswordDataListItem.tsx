"use client";

import { EditIcon } from "lucide-react";
import { ComponentProps, FunctionComponent, useState } from "react";

import { UserPasswordDataListItem } from "@/entities/user";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import Button from "@/shared/ui/button";
import Dialog from "@/shared/ui/dialog";
import Drawer from "@/shared/ui/drawer";
import Tooltip from "@/shared/ui/tooltip";

import UserUpdatePasswordForm from "./UserUpdatePasswordForm";

interface UserUpdatePasswordDataListItemProps
  extends Omit<ComponentProps<typeof UserPasswordDataListItem>, "action"> {}

const UserUpdatePasswordDataListItem: FunctionComponent<
  UserUpdatePasswordDataListItemProps
> = (props) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const Root = isMobile ? Drawer : Dialog;

  return (
    <UserPasswordDataListItem
      action={
        <Root open={open} onOpenChange={setOpen} autoFocus={isMobile}>
          <Tooltip disableHoverableContent>
            <Tooltip.Trigger asChild>
              <Root.Trigger asChild>
                <Button variant="outline" size="icon">
                  <EditIcon />
                  <span className="sr-only">Редактировать пароль</span>
                </Button>
              </Root.Trigger>
            </Tooltip.Trigger>
            <Tooltip.Content side="left">Редактировать пароль</Tooltip.Content>
          </Tooltip>

          <Root.Content>
            <Root.Header>
              <Root.Title>Редактирование пароля</Root.Title>
              <Root.Description>
                Вы можете изменить пароль для своей учётной записи. Это действие
                не сбросит сеансы на других устройствах.
              </Root.Description>
            </Root.Header>
            <UserUpdatePasswordForm
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
      {...props}
    />
  );
};

export default UserUpdatePasswordDataListItem;
