import { Group, GroupProps, Kbd, rem } from "@mantine/core";
import { useOs } from "@mantine/hooks";

export type HotkeyProps = GroupProps & {
  keys: string[];
};

export const Kbds: React.FC<HotkeyProps> = ({ keys, ...props }) => {
  const os = useOs();
  const apple = os === "ios" || os === "macos";

  const symbolMap: Record<string, string> = {
    mod: apple ? "⌘" : "CTRL",
    Slash: "/",
    Comma: ",",
  };

  const getKeySymbol = (key: string) => {
    return symbolMap[key] || key;
  };

  return (
    <Group gap={4} {...props}>
      {keys.map((key) => (
        <Kbd lh={1} key={key} miw={rem(10)}>
          {getKeySymbol(key)}
        </Kbd>
      ))}
    </Group>
  );
};
