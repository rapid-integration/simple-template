"use client";

import { ComponentProps, FunctionComponent, useState } from "react";

import { useIsMobile } from "@/shared/hooks/use-mobile";
import { Button } from "@/shared/ui/button";
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
          <DataList.ItemLabel>Password</DataList.ItemLabel>
          <DataList.ItemValue>********</DataList.ItemValue>
        </DataList.ItemGroup>

        {isMobile ? (
          <Drawer open={open} onOpenChange={setOpen}>
            <Drawer.Trigger asChild>
              <Button variant="outline">Edit</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Edit Password</Drawer.Title>
                <Drawer.Description>
                  You can edit password for you account. This action would not
                  reset sessions on other devices.
                </Drawer.Description>
              </Drawer.Header>
              <UserUpdatePasswordForm
                onSubmit={() => setOpen(false)}
                className="px-4"
              />
              <Drawer.Footer className="pt-2">
                <Drawer.Close asChild>
                  <Button variant="outline">Close</Button>
                </Drawer.Close>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer>
        ) : (
          <Dialog open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button variant="outline">Edit</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Edit Password</Dialog.Title>
                <Dialog.Description>
                  You can edit password for you account. This action would not
                  reset sessions on other devices.
                </Dialog.Description>
              </Dialog.Header>
              <UserUpdatePasswordForm onSubmit={() => setOpen(false)} />
            </Dialog.Content>
          </Dialog>
        )}
      </DataList.Item>
    </>
  );
};

export default UserUpdatePasswordDataListItem;
