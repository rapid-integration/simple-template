"use client";

import { ComponentProps, FunctionComponent, useState } from "react";

import { useIsMobile } from "@/shared/hooks/use-mobile";
import Button from "@/shared/ui/button";
import DataList from "@/shared/ui/data-list";
import Dialog from "@/shared/ui/dialog";
import Drawer from "@/shared/ui/drawer";

import UserUpdatePasswordForm from "./UserUpdatePasswordForm";

interface UserUpdatePasswordDataListItemProps
  extends ComponentProps<typeof DataList.Item> {}

const UserUpdatePasswordDataListItem: FunctionComponent<
  UserUpdatePasswordDataListItemProps
> = (props) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <>
      <DataList.Item {...props}>
        <DataList.ItemGroup>
          <DataList.ItemLabel>Пароль</DataList.ItemLabel>
          <DataList.ItemValue>********</DataList.ItemValue>
        </DataList.ItemGroup>

        {isMobile ? (
          <Drawer open={open} onOpenChange={setOpen} autoFocus>
            <Drawer.Trigger asChild>
              <Button variant="outline">Изм.</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Редактирование пароля</Drawer.Title>
                <Drawer.Description>
                  Вы можете изменить пароль для своей учётной записи. Это
                  действие не сбросит сеансы на других устройствах.
                </Drawer.Description>
              </Drawer.Header>
              <UserUpdatePasswordForm
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
                <Dialog.Title>Редактирование пароля</Dialog.Title>
                <Dialog.Description>
                  Вы можете изменить пароль для своей учётной записи. Это
                  действие не сбросит сеансы на других устройствах.
                </Dialog.Description>
              </Dialog.Header>
              <UserUpdatePasswordForm onSuccess={() => setOpen(false)} />
            </Dialog.Content>
          </Dialog>
        )}
      </DataList.Item>
    </>
  );
};

export default UserUpdatePasswordDataListItem;
