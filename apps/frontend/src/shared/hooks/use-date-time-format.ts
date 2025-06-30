"use client";

import { format } from "date-fns-tz";

import useTimeZone from "./use-time-zone";

interface UseDateTimeFormatProps {
  date: Date | string | number;
  format: string;
  forceLocale?: string;
}

export default function useDateTimeFormat(props: UseDateTimeFormatProps) {
  const timeZone = useTimeZone();

  if (timeZone) {
    return format(props.date, props.format, { timeZone });
  }
}
