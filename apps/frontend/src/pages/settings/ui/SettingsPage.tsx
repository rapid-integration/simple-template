import {
  Avatar,
  Card,
  Divider,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Title,
} from "@mantine/core";

import {
  getCurrentUser,
  UserColorSchemeCell,
  UserCreatedAtCell,
  UserIdCell,
} from "@/entities/user";
import { LogoutButton } from "@/features/auth/logout";
import { UserUpdatePasswordCell } from "@/features/user/update-password";
import { UserUpdateUsernameCell } from "@/features/user/update-username";

import classNames from "./SettingsPage.module.css";
import { SETTINGS_PAGE_TABS } from "../config/tabs";

export const SettingsPage: React.FC = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Stack>
      <Title order={1} size="h2">
        Настройки
      </Title>

      <Tabs
        id="settings-page-tabs"
        variant="pills"
        radius="xl"
        defaultValue="account"
      >
        <TabsList pb="md">
          {SETTINGS_PAGE_TABS.map((tab) => (
            <TabsTab
              key={tab.value}
              value={tab.value}
              leftSection={<tab.icon size={20} />}
              classNames={classNames}
            >
              {tab.label}
            </TabsTab>
          ))}
        </TabsList>

        <TabsPanel value="account">
          <Stack mt="md">
            <Stack gap="xs" mb="xs">
              <Avatar
                mx="auto"
                size="xl"
                name={currentUser.username}
                color="initials"
              />
              <Title order={2} ta="center">
                {currentUser.username}
              </Title>
            </Stack>

            <Card p={0}>
              <UserUpdateUsernameCell value={currentUser.username} />
              <Divider />
              <UserUpdatePasswordCell />
            </Card>

            <Card p={0}>
              <UserCreatedAtCell value={currentUser.created_at} />
              <Divider />
              <UserIdCell value={currentUser.id} />
            </Card>

            <LogoutButton />
          </Stack>
        </TabsPanel>

        <TabsPanel value="appearance">
          <Card p={0}>
            <UserColorSchemeCell />
          </Card>
        </TabsPanel>
      </Tabs>
    </Stack>
  );
};
