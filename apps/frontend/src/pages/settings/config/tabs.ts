import { TbBrush, TbUser } from "react-icons/tb";

import { SettingsPageTab } from "../model/types";

export const SETTINGS_PAGE_TABS: SettingsPageTab[] = [
  {
    icon: TbUser,
    label: "Аккаунт",
    value: "account",
  },
  {
    icon: TbBrush,
    label: "Внешний вид",
    value: "appearance",
  },
];
