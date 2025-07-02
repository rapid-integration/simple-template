"use client";

import { ComponentProps, FunctionComponent, useState } from "react";

import { useIsMobile } from "@/shared/hooks/use-mobile";
import Button from "@/shared/ui/button";
import DataList from "@/shared/ui/data-list";
import Dialog from "@/shared/ui/dialog";
import Drawer from "@/shared/ui/drawer";

import UserUpdateUsernameForm from "./UserUpdateUsernameForm";

interface UserUpdateUsernameDataListItemProps
  extends ComponentProps<typeof DataList.Item> {
  username: string;
}

const UserUpdateUsernameDataListItem: FunctionComponent<
  UserUpdateUsernameDataListItemProps
> = ({ username, ...otherProps }) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <>
      <DataList.Item {...otherProps}>
        <DataList.ItemGroup>
          <DataList.ItemLabel>Имя пользователя</DataList.ItemLabel>
          <DataList.ItemValue>{username}</DataList.ItemValue>
        </DataList.ItemGroup>

        {isMobile ? (
          <Drawer open={open} onOpenChange={setOpen} autoFocus>
            <Drawer.Trigger asChild>
              <Button variant="outline">Изм.</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Редактирование имени пользователя</Drawer.Title>
                <Drawer.Description>
                  Вы можете установить публичное имя пользователя.
                </Drawer.Description>
              </Drawer.Header>
              <UserUpdateUsernameForm
                defaultValues={{ username }}
                onSuccess={() => setOpen(false)}
                className="px-4"
              />
              <Drawer.Footer className="pt-2">
                <Drawer.Close asChild>
                  <Button variant="outline">Закрыть</Button>
                </Drawer.Close>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer>
        ) : (
          <Dialog open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button variant="outline">Изм.</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Редактирование имени пользователя</Dialog.Title>
                <Dialog.Description>
                  Вы можете установить публичное имя пользователя.
                </Dialog.Description>
              </Dialog.Header>
              <UserUpdateUsernameForm
                defaultValues={{ username }}
                onSuccess={() => setOpen(false)}
              />
            </Dialog.Content>
          </Dialog>
        )}
      </DataList.Item>
    </>
  );
};

export default UserUpdateUsernameDataListItem;
