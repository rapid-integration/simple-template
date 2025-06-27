"use client";

import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentProps } from "react";

import { cn } from "@/shared/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

const icons = {
  light: SunIcon,
  dark: MoonIcon,
  system: MonitorIcon,
} as const;

export function ThemeRadioGroupItem({ value }: { value: string }) {
  const Icon = icons[value as keyof typeof icons];

  return (
    <Tooltip>
      <TooltipTrigger
        asChild
        className="flex items-center justify-center rounded-sm p-1 text-muted-foreground outline-hidden aria-checked:bg-accent aria-checked:text-foreground data-highlighted:bg-accent"
      >
        <DropdownMenuRadioItem value={value}>
          <Icon className="size-4 text-inherit" />
          <span className="sr-only capitalize">{value}</span>
        </DropdownMenuRadioItem>
      </TooltipTrigger>
      <TooltipContent className="capitalize">{value}</TooltipContent>
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
      {themes.toReversed().map((theme) => (
        <ThemeRadioGroupItem key={theme} value={theme} />
      ))}
    </DropdownMenuRadioGroup>
  );
}
