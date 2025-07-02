"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

import Bar from "@/shared/ui/bar";
import Button from "@/shared/ui/button";
import Separator from "@/shared/ui/separator";
import Sidebar from "@/shared/ui/sidebar";

const ProfileEditPageBar: FunctionComponent = () => {
  const { isMobile, open } = Sidebar.useContext();

  return (
    <Bar>
      <Bar.Start>
        {!isMobile && !open && (
          <>
            <Sidebar.Trigger />
            <Separator orientation="vertical" className="mx-1 !h-4" />
          </>
        )}
        <Button asChild variant="ghost" className="text-muted-foreground">
          <Link href="/profile">
            <ArrowLeftIcon />
            <span>Назад</span>
          </Link>
        </Button>
      </Bar.Start>
      <Bar.Center>Редактирование</Bar.Center>
    </Bar>
  );
};

export default ProfileEditPageBar;
