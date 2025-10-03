"use client";

import { ActionIcon, Loader, TextInput, TextInputProps } from "@mantine/core";
import { useEffect, useState } from "react";
import { TbSearch, TbX } from "react-icons/tb";

export type SearchTextInputProps = TextInputProps & {
  loading?: boolean | undefined;
  onValueChange?: (value: string) => void;
};

export const SearchTextInput: React.FC<SearchTextInputProps> = ({
  loading,
  onValueChange,
  ...props
}) => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const handleSearchInput = (event: React.InputEvent<HTMLInputElement>) => {
    setSearchInputValue(event.currentTarget.value);
  };

  const clearSearch = () => {
    setSearchInputValue("");
  };

  useEffect(() => {
    onValueChange?.(searchInputValue);
  });

  return (
    <TextInput
      value={searchInputValue}
      onInput={handleSearchInput}
      leftSection={loading ? <Loader size="sm" /> : <TbSearch size={24} />}
      rightSection={
        searchInputValue && (
          <ActionIcon
            size="md"
            aria-label="Clear search"
            onClick={clearSearch}
            variant="subtle"
            color="gray"
          >
            <TbX size={20} />
          </ActionIcon>
        )
      }
      {...props}
    />
  );
};
