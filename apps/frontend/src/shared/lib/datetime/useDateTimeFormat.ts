"use client";

import { useEffect, useState } from "react";

export type UseDateTimeFormatProps = {
  value: Date | number | string;
  locales?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
};

export const useDateTimeFormat = ({
  value,
  locales,
  options,
}: UseDateTimeFormatProps): string => {
  const [format, setFormat] = useState("");

  const date = typeof value === "string" ? Date.parse(value) : value;
  const formatter = Intl.DateTimeFormat(locales, options);

  useEffect(() => {
    setFormat(formatter.format(date));
  }, []);

  return format;
};
