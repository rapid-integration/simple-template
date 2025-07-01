"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

import Bar from "@/shared/ui/bar";
import Button from "@/shared/ui/button";
import { SidebarTrigger, useSidebar } from "@/shared/ui/sidebar";

const ProfileEditPageBar: FunctionComponent = () => {
  const { isMobile, open } = useSidebar();

  return (
    <Bar>
      <Bar.Start>
        {!isMobile && !open && <SidebarTrigger />}
        <Button asChild variant="ghost" className="text-muted-foreground">
          <Link href="/profile">
            <ArrowLeftIcon />
            <span>Back</span>
          </Link>
        </Button>
      </Bar.Start>
      <Bar.Center>Edit Profile</Bar.Center>
    </Bar>
  );
};

export default ProfileEditPageBar;
