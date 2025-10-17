import { HiMiniPaintBrush, HiUser } from "react-icons/hi2";

import { SettingsPageTab } from "../model/types";

export const SETTINGS_PAGE_TABS: SettingsPageTab[] = [
  {
    icon: HiUser,
    label: "Аккаунт",
    value: "account",
  },
  {
    icon: HiMiniPaintBrush,
    label: "Внешний вид",
    value: "appearance",
  },
];
