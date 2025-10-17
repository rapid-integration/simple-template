"use client";

import { CloseButton, Loader, TextInput, TextInputProps } from "@mantine/core";
import { useEffect, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

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
      leftSection={
        loading ? <Loader size="xs" /> : <HiMiniMagnifyingGlass size={20} />
      }
      rightSection={
        searchInputValue && <CloseButton onClick={clearSearch} tabIndex={-1} />
      }
      {...props}
    />
  );
};
