"use client";

import { FunctionComponent } from "react";

import Bar from "@/shared/ui/bar";
import Sidebar from "@/shared/ui/sidebar";

const HomePageBar: FunctionComponent = () => {
  const { isMobile, open } = Sidebar.useContext();

  return (
    <Bar>
      {(isMobile || !open) && (
        <Bar.Start>
          <Sidebar.Trigger />
        </Bar.Start>
      )}
      <Bar.Center showAfterScrolled>Главная</Bar.Center>
    </Bar>
  );
};

export default HomePageBar;
