import { user } from "@/entities/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Tooltip, TooltipContent } from "@/shared/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { ArrowLeftIcon, EditIcon, LogOutIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="flex flex-col relative items-center">
        <header className="sticky top-0 w-full grid grid-cols-3 items-center p-2 h-13">
          <Button
            asChild
            variant="ghost"
            className="text-muted-foreground justify-self-start"
          >
            <Link href="/">
              <ArrowLeftIcon />
              <span>Back</span>
            </Link>
          </Button>
          <h1 className="mx-auto text-sm font-medium">Profile</h1>
          <div className="justify-self-end flex gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-destructive justify-self-end"
                >
                  <LogOutIcon />
                  <span className="sr-only">Logout</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Logout</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-accent-foreground justify-self-end"
                >
                  <EditIcon />
                  <span className="sr-only">Edit Profile</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Edit Profile</TooltipContent>
            </Tooltip>
          </div>
        </header>
        <div className="m-4 flex grow flex-col gap-4 w-full items-center justify-center max-w-xl">
          <Avatar className="size-24 text-4xl">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>NG</AvatarFallback>
          </Avatar>
          <hgroup className="text-center">
            <h2 className="text-xl font-medium">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
          </hgroup>
        </div>
      </div>
    </>
  );
}
