import {
  Avatar,
  Card,
  Divider,
  Paper,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Title,
} from "@mantine/core";
import { TbBrush, TbUser } from "react-icons/tb";

import {
  getCurrentUser,
  UserColorSchemeCell,
  UserCreatedAtCell,
  UserIdCell,
} from "@/entities/user";
import { LogoutButton } from "@/features/auth/logout";
import { UserUpdatePasswordCell } from "@/features/user/update-password";
import { UserUpdateUsernameCell } from "@/features/user/update-username";

export const SettingsPage: React.FC = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Stack gap={0}>
      <Title order={1} size="h2">
        Настройки
      </Title>

      <Tabs variant="pills" radius="xl" defaultValue="account">
        <Paper
          py="md"
          radius={0}
          style={{
            position: "sticky",
            top: "var(--app-shell-header-height)",
            zIndex: 100,
          }}
        >
          <TabsList>
            {[
              { label: "Аккаунт", value: "account", icon: TbUser },
              { label: "Внешний вид", value: "appearance", icon: TbBrush },
            ].map((tab) => (
              <TabsTab
                key={tab.value}
                id={`settings-page-tab-${tab.value}`}
                value={tab.value}
                leftSection={<tab.icon size={20} />}
                color="var(--mantine-color-gray-light)"
                style={{
                  color: "var(--mantine-body-color)",
                }}
                styles={{
                  tabSection: {
                    marginRight: 6,
                  },
                }}
                fw={500}
                py={8}
                px="sm"
              >
                {tab.label}
              </TabsTab>
            ))}
          </TabsList>
        </Paper>

        <TabsPanel value="account">
          <Stack mt="md">
            <Stack gap="xs" mb="xs">
              <Avatar
                name={currentUser.username}
                color="initials"
                size="xl"
                mx="auto"
              />
              <Title order={2} ta="center">
                {currentUser.username}
              </Title>
            </Stack>

            <Card p={0} withBorder>
              <UserUpdateUsernameCell value={currentUser.username} />
              <Divider />
              <UserUpdatePasswordCell />
            </Card>

            <Card p={0} withBorder>
              <UserCreatedAtCell value={currentUser.created_at} />
              <Divider />
              <UserIdCell value={currentUser.id} />
            </Card>

            <LogoutButton />
          </Stack>
        </TabsPanel>

        <TabsPanel value="appearance">
          <Card p={0} withBorder>
            <UserColorSchemeCell />
          </Card>
        </TabsPanel>
      </Tabs>
    </Stack>
  );
};
