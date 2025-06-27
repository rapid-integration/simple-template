import { ArrowLeftIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { user } from "@/entities/user";
import { useScrolled } from "@/shared/hooks/use-scrolled";
import { cn } from "@/shared/lib/utils";
import AlertDialog from "@/shared/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

export default function ProfileEdit() {
  const scrolled = useScrolled();
  const form = useForm<{ name: string; email: string; about: string }>({
    defaultValues: user,
  });
  const name = form.watch("name");
  const email = form.watch("email");

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="relative flex grow flex-col items-center">
        <div
          className={cn(
            "sticky top-0 z-10 grid h-13 w-full grid-cols-3 items-center border-b border-transparent bg-background/75 p-2 backdrop-blur-xl transition-colors md:text-sm",
            scrolled && "border-border",
          )}
        >
          {form.formState.isDirty ? (
            <AlertDialog>
              <AlertDialog.Trigger asChild>
                <Button
                  variant="ghost"
                  className="justify-self-start text-destructive"
                >
                  <span>Cancel</span>
                </Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>
                    Do you really want to cancel?
                  </AlertDialog.Title>
                  <AlertDialog.Description>
                    Canceling editing profile would reset your changes.
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Close</AlertDialog.Cancel>
                  <AlertDialog.Action variant="destructive" asChild>
                    <Link href="/profile">Cancel</Link>
                  </AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          ) : (
            <Button
              asChild
              variant="ghost"
              className="justify-self-start text-muted-foreground"
            >
              <Link href="/profile">
                <ArrowLeftIcon />
                <span>Back</span>
              </Link>
            </Button>
          )}
          <h1 className="mx-auto font-medium">Edit Profile</h1>
        </div>
        <div className="flex w-full grow flex-col items-center gap-8 p-4 md:max-w-xl">
          <div className="space-y-3">
            <Avatar className="mx-auto size-24 text-4xl">
              <AvatarImage src={user.avatar} alt={form.getValues("name")} />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
            <hgroup className="text-center">
              <h2 className="text-3xl font-semibold md:text-2xl">{name}</h2>
              <p className="text-lg text-muted-foreground">{email}</p>
            </hgroup>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((v) => console.log(v))}
              className="flex w-full grow flex-col gap-4"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl {...field}>
                      <Input placeholder="Enter your name…" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl {...field}>
                      <Input placeholder="Enter your email…" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="about"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>About</FormLabel>
                    <FormControl {...field}>
                      <Textarea
                        rows={3}
                        placeholder="Write a few lines about yourself…"
                      />
                    </FormControl>
                    <FormDescription>
                      You can add a few lines about yourself.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="max-sm:mt-auto sm:self-end"
                disabled={!form.formState.isDirty}
              >
                Save
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
