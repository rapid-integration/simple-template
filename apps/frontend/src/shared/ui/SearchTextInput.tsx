"use client";

import { ActionIcon, Loader, TextInput, TextInputProps } from "@mantine/core";
import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { TbX } from "react-icons/tb";

export type SearchTextInputProps = TextInputProps & {
  loading?: boolean | undefined;
  onValueChange?: (value: string) => void;
};

export const SearchTextInput: React.FC<SearchTextInputProps> = ({
  value,
  defaultValue,
  loading,
  onValueChange,
  ...props
}) => {
  const [searchInputValue, setSearchInputValue] = useState<string>(
    typeof value === "string"
      ? value
      : typeof defaultValue === "string"
        ? defaultValue
        : "",
  );

  const handleSearchInput = (event: React.InputEvent<HTMLInputElement>) => {
    setSearchInputValue(event.currentTarget.value);
  };

  const clearSearch = () => {
    setSearchInputValue("");
  };

  useEffect(() => {
    setSearchInputValue(typeof value === "string" ? value : "");
  }, [value]);

  useEffect(() => {
    onValueChange?.(searchInputValue);
  }, [searchInputValue]);

  return (
    <TextInput
      inputMode="text"
      enterKeyHint="search"
      spellCheck={false}
      autoCapitalize="off"
      autoCorrect="off"
      value={searchInputValue}
      onInput={handleSearchInput}
      leftSection={loading ? <Loader size="sm" /> : <LuSearch size={24} />}
      rightSection={
        searchInputValue && (
          <ActionIcon
            size="md"
            aria-label="Очистить"
            onClick={clearSearch}
            variant="subtle"
            color="gray"
            tabIndex={-1}
          >
            <TbX size={20} />
          </ActionIcon>
        )
      }
      {...props}
    />
  );
};
