"use client";

import { ru } from "date-fns/locale";
import { format } from "date-fns-tz";

import useTimeZone from "./use-time-zone";

interface UseDateTimeFormatProps {
  date: Date | string | number;
  format: string;
}

export default function useDateTimeFormat(props: UseDateTimeFormatProps) {
  const timeZone = useTimeZone();

  if (timeZone) {
    return format(props.date, props.format, { locale: ru, timeZone });
  }
}
