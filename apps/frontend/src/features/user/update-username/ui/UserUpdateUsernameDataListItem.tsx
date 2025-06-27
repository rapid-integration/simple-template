import { ComponentProps, FunctionComponent, useState } from "react";

import { useIsMobile } from "@/shared/hooks/use-mobile";
import { Button } from "@/shared/ui/button";
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
          <DataList.ItemLabel>Username</DataList.ItemLabel>
          <DataList.ItemValue>{username}</DataList.ItemValue>
        </DataList.ItemGroup>

        {isMobile ? (
          <Drawer open={open} onOpenChange={setOpen} autoFocus>
            <Drawer.Trigger asChild>
              <Button variant="outline">Edit</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Edit Username</Drawer.Title>
                <Drawer.Description>
                  You can set public username.
                </Drawer.Description>
              </Drawer.Header>
              <UserUpdateUsernameForm
                defaultValues={{ username }}
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
                <Dialog.Title>Edit Username</Dialog.Title>
                <Dialog.Description>
                  You can set public username.
                </Dialog.Description>
              </Dialog.Header>
              <UserUpdateUsernameForm
                defaultValues={{ username }}
                onSubmit={() => setOpen(false)}
              />
            </Dialog.Content>
          </Dialog>
        )}
      </DataList.Item>
    </>
  );
};

export default UserUpdateUsernameDataListItem;
