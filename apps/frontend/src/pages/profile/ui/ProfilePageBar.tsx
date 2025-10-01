"use client";

import { FunctionComponent } from "react";

import Bar from "@/shared/ui/bar";
import Sidebar from "@/shared/ui/sidebar";

const ProfilePageBar: FunctionComponent = () => {
  const { openMobile, open, isMobile } = Sidebar.useContext();

  return (
    <Bar>
      <Bar.Start>
        {(!open || (isMobile && !openMobile)) && <Sidebar.Trigger />}
      </Bar.Start>
      <Bar.Center>Настройки</Bar.Center>
    </Bar>
  );
};

export default ProfilePageBar;
