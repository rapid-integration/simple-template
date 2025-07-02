"use client";

import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentProps, useMemo } from "react";

import { cn } from "@/shared/lib/utils";
import Tooltip from "@/shared/ui/tooltip";

const icons = {
  light: SunIcon,
  dark: MoonIcon,
  system: MonitorIcon,
} as const;

const labels = {
  light: "Светлая",
  dark: "Тёмная",
  system: "Как в системе",
} as const;

export function ThemeRadioGroupItem({ value }: { value: string }) {
  const Icon = icons[value as keyof typeof icons];
  const label = useMemo(() => labels[value as keyof typeof labels], [value]);

  return (
    <Tooltip>
      <Tooltip.Trigger
        asChild
        className="flex items-center justify-center rounded-sm p-1 text-muted-foreground outline-hidden aria-checked:bg-accent aria-checked:text-foreground data-highlighted:bg-accent"
      >
        <DropdownMenuRadioItem value={value}>
          <Icon className="size-4 text-inherit" />
          <span className="sr-only">{label}</span>
        </DropdownMenuRadioItem>
      </Tooltip.Trigger>
      <Tooltip.Content>{label}</Tooltip.Content>
    </Tooltip>
  );
}

export function ThemeRadioGroup({
  className,
  ...otherProps
}: ComponentProps<typeof DropdownMenuRadioGroup>) {
  const { theme, themes, setTheme } = useTheme();

  return (
    <DropdownMenuRadioGroup
      value={theme}
      onValueChange={setTheme}
      className={cn(
        "flex size-fit items-center justify-center gap-0.5 self-start rounded-md border border-input bg-background p-0.5",
        className,
      )}
      {...otherProps}
    >
      <Tooltip.Provider skipDelayDuration={0}>
        {themes.toReversed().map((theme) => (
          <ThemeRadioGroupItem key={theme} value={theme} />
        ))}
      </Tooltip.Provider>
    </DropdownMenuRadioGroup>
  );
}
