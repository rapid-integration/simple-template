import { ArrowLeftIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { user, UserProfileSection } from "@/entities/user";
import AlertDialog from "@/shared/ui/alert-dialog";
import Bar from "@/shared/ui/bar";
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
import Page from "@/shared/ui/page";
import { Textarea } from "@/shared/ui/textarea";

export default function ProfileEdit() {
  const form = useForm<{ name: string; email: string; about: string }>({
    defaultValues: user,
  });
  const name = form.watch("name");
  const email = form.watch("email");

  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>

      <Page>
        <Bar>
          <Bar.Start>
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
          </Bar.Start>
          <Bar.Center>Edit Profile</Bar.Center>
        </Bar>

        <Page.Content size="xl">
          <UserProfileSection avatar={user.avatar} name={name} email={email} />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((v) => console.log(v))}
              className="flex w-full grow flex-col gap-6"
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
        </Page.Content>
      </Page>
    </>
  );
}
