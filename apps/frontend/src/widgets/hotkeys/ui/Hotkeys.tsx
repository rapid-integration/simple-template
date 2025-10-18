"use client";

import {
  Card,
  Kbd,
  Modal,
  Stack,
  Table,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { routes } from "@/shared/config";
import { Kbds } from "@/shared/ui/Kbds";

export const Hotkeys: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();

  const hotkeys = [
    {
      id: "shortcuts",
      keys: ["mod", "Slash"],
      description: "Показать все горячие клавиши",
      action: open,
    },
    {
      id: "theme",
      keys: ["mod", "J"],
      description: "Переключить тему",
      action: toggleColorScheme,
    },
    {
      id: "home",
      keys: ["mod", "H"],
      description: "Открыть главную страницу",
      action: () => router.push(routes.home()),
    },
    {
      id: "settings",
      keys: ["mod", "Comma"],
      description: "Открыть настройки",
      action: () => router.push(routes.settings()),
    },
  ];

  useHotkeys(
    hotkeys.map((shortcut) => [
      shortcut.keys.join(" + "),
      shortcut.action,
      { usePhysicalKeys: true, preventDefault: true },
    ]),
  );

  useEffect(() => {
    if (opened) {
      close();
    }
  }, [pathname]);

  return (
    <Modal title="Горячие клавиши" opened={opened} onClose={close}>
      <Stack>
        <Text size="sm" c="dimmed">
          Быстрые клавиши для навигации и действий
        </Text>

        <Card p={0}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Действие</Table.Th>
                <Table.Th ta="right">Сочетание</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {hotkeys.map((shortcut) => (
                <Table.Tr key={shortcut.id}>
                  <Table.Td>{shortcut.description}</Table.Td>
                  <Table.Td>
                    <Kbds justify="flex-end" keys={shortcut.keys} />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>

        <Text size="xs" c="dimmed" ta="center">
          Нажмите <Kbd lh={1}>ESC</Kbd> чтобы закрыть это окно
        </Text>
      </Stack>
    </Modal>
  );
};
