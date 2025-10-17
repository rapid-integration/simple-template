"use client";

import {
  Button,
  Text,
  ButtonProps,
  Flex,
  Modal,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTransition } from "react";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";

import { logout } from "../api/actions";

export type LogoutButtonProps = ButtonProps;

export const LogoutButton: React.FC<LogoutButtonProps> = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [pending, startTransition] = useTransition();

  const startLogout = () => {
    startTransition(logout);
  };

  return (
    <>
      <Modal.Root
        size="sm"
        opened={opened}
        onClose={close}
        closeOnClickOutside={!pending}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body>
            <Stack gap="lg">
              <Stack pt="md">
                <ThemeIcon
                  mx="auto"
                  size={72}
                  color="red"
                  variant="transparent"
                >
                  <HiMiniArrowRightStartOnRectangle size={72} />
                </ThemeIcon>

                <Stack>
                  <Modal.Title ta="center" fz="h4">
                    Вы действительно хотите выйти?
                  </Modal.Title>
                  <Text c="dimmed" fz="sm" mb="xs" ta="center">
                    Вы сможете войти снова в любое время только с помощью своего
                    пароля.
                  </Text>
                </Stack>
              </Stack>

              <Flex gap="xs" direction={{ base: "column", sm: "row-reverse" }}>
                <Button
                  color="red"
                  loading={pending}
                  onClick={startLogout}
                  fullWidth
                >
                  Выйти
                </Button>
                <Button
                  variant="default"
                  disabled={pending}
                  onClick={close}
                  fullWidth
                  data-autofocus
                >
                  Отмена
                </Button>
              </Flex>
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button
        size="md"
        variant="default"
        onClick={open}
        style={{ color: "var(--mantine-color-red-text)" }}
        {...props}
      >
        Выйти
      </Button>
    </>
  );
};
