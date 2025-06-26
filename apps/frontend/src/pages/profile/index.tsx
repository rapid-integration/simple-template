import { user } from "@/entities/user";
import { useScrolled } from "@/shared/hooks/use-scrolled";
import { cn } from "@/shared/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import DataList from "@/shared/ui/data-list";
import { toast } from "@/shared/ui/sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import { ArrowLeftIcon, CopyIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const scrolled = useScrolled();

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="flex flex-col relative grow items-center">
        <div
          className={cn(
            "sticky top-0 z-10 grid h-13 w-full grid-cols-3 items-center border-b border-transparent bg-background/75 p-2 backdrop-blur-xl transition-colors",
            scrolled && "border-border"
          )}
        >
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
            <Button asChild variant="ghost" className="justify-self-end">
              <Link href="/profile/edit">Edit</Link>
            </Button>
          </div>
        </div>
        <div className="flex grow flex-col gap-8 p-4 w-full items-center md:max-w-xl">
          <div className="space-y-3">
            <Avatar className="size-24 text-4xl mx-auto">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
            <hgroup className="text-center">
              <h2 className="text-3xl font-semibold md:text-2xl">
                {user.name}
              </h2>
              <p className="text-lg text-muted-foreground">{user.email}</p>
            </hgroup>
          </div>
          <DataList orientation="horizontal">
            <DataList.Item>
              <DataList.ItemGroup>
                <DataList.ItemLabel>Registration date</DataList.ItemLabel>
                <DataList.ItemValue>{user.registrationDate}</DataList.ItemValue>
              </DataList.ItemGroup>
              <Tooltip disableHoverableContent>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => {
                      if (window.isSecureContext) {
                        navigator.clipboard.writeText(user.registrationDate);
                        toast.success(
                          "Registration date copied to the clipboard!"
                        );
                      } else {
                        toast.error(
                          "Failed to copy registration date to clipboard: window is not in a secure context."
                        );
                      }
                    }}
                  >
                    <CopyIcon />
                    <span className="sr-only">Copy</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  Copy registration date to clipboard
                </TooltipContent>
              </Tooltip>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemGroup className="overflow-hidden">
                <DataList.ItemLabel>ID</DataList.ItemLabel>
                <DataList.ItemValue className="font-mono truncate">
                  {user.id}
                </DataList.ItemValue>
              </DataList.ItemGroup>
              <Tooltip disableHoverableContent>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => {
                      if (window.isSecureContext) {
                        navigator.clipboard.writeText(user.id);
                        toast.success("ID copied to the clipboard!");
                      } else {
                        toast.error(
                          "Failed to copy ID to clipboard: window is not in a secure context."
                        );
                      }
                    }}
                  >
                    <CopyIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  Copy ID to clipboard
                </TooltipContent>
              </Tooltip>
            </DataList.Item>
          </DataList>
          <DataList orientation="horizontal">
            <DataList.Item>
              <DataList.ItemGroup>
                <DataList.ItemLabel>About</DataList.ItemLabel>
                <span className="inline">
                  <DataList.ItemValue className="text-pretty inline">
                    {showMoreAbout ? user.about : `${user.about.slice(0, 96)}…`}
                  </DataList.ItemValue>
                  {!showMoreAbout && (
                    <button
                      onClick={() => setShowMoreAbout(true)}
                      className="ms-1 cursor-pointer font-medium text-secondary-foreground transition hover:text-foreground"
                    >
                      Show more
                    </button>
                  )}
                </span>
              </DataList.ItemGroup>
            </DataList.Item>
          </DataList>
        </div>
      </div>
    </>
  );
}
