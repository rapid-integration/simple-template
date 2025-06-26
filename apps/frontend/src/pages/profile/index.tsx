import { user } from "@/entities/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import DataList from "@/shared/ui/data-list";
import { toast } from "@/shared/ui/sonner";
import { ArrowLeftIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useClippy from "use-clippy";

export default function Profile() {
  const [, setClipboard] = useClippy();
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="flex flex-col relative grow items-center">
        <div className="sticky top-0 w-full grid grid-cols-3 items-center p-2 h-13 border-b border-border bg-background z-10">
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
            <Button
              asChild
              variant="ghost"
              className="text-accent-foreground justify-self-end"
            >
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
              <h2 className="text-3xl font-semibold md:text-2xl">{user.name}</h2>
              <p className="text-lg text-muted-foreground">{user.email}</p>
            </hgroup>
          </div>
          <DataList orientation="horizontal">
            <DataList.Item>
              <DataList.ItemGroup>
                <DataList.ItemLabel>Registration date</DataList.ItemLabel>
                <DataList.ItemValue>{user.registrationDate}</DataList.ItemValue>
              </DataList.ItemGroup>
              <Button
                variant="outline"
                onClick={() => {
                  setClipboard(user.registrationDate);
                  toast.success("Registration date copied to the clipboard!");
                }}
              >
                Copy
              </Button>
            </DataList.Item>
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
