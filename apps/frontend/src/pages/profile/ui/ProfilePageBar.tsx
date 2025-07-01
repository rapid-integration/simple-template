"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

import Bar from "@/shared/ui/bar";
import Button from "@/shared/ui/button";
import Separator from "@/shared/ui/separator";
import Sidebar from "@/shared/ui/sidebar";

const ProfilePageBar: FunctionComponent = () => {
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
          <Link href="/">
            <ArrowLeftIcon />
            <span>Back</span>
          </Link>
        </Button>
      </Bar.Start>
      <Bar.Center showAfterScrolled>Profile</Bar.Center>
      <Bar.End>
        <Button asChild variant="ghost" className="justify-self-end">
          <Link href="/profile/edit">Edit</Link>
        </Button>
      </Bar.End>
    </Bar>
  );
};

export default ProfilePageBar;
