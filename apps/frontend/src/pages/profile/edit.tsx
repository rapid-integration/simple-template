import { user } from "@/entities/user";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function ProfileEdit() {
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
      <div className="flex flex-col relative grow items-center">
        <div className="sticky top-0 w-full grid grid-cols-3 items-center p-2 h-13 border-b border-border bg-background z-10">
          {form.formState.isDirty ? (
            <AlertDialog>
              <AlertDialog.Trigger asChild>
                <Button
                  variant="ghost"
                  className="text-destructive justify-self-start"
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
              className="text-muted-foreground justify-self-start"
            >
              <Link href="/profile">
                <ArrowLeftIcon />
                <span>Back</span>
              </Link>
            </Button>
          )}
          <h1 className="mx-auto text-sm font-medium">Edit Profile</h1>
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
          </div>
        </div>
        <div className="flex grow flex-col gap-8 p-4 w-full items-center md:max-w-xl">
          <div className="space-y-3">
            <Avatar className="size-24 text-4xl mx-auto">
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
              className="flex flex-col gap-4 w-full grow"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl {...field}>
                      <Input placeholder="Name" />
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
                      <Input placeholder="Email" />
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
                      <Textarea rows={3} placeholder="About" />
                    </FormControl>
                    <FormDescription>
                      You can add a few lines about yourself.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="md:self-end max-md:mt-auto"
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
