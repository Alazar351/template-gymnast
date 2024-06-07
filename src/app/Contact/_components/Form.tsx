"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  emailAddress: z.string().email({
    message: "Please enter your email address",
  }),
  subject: z.string().min(1, {
    message: "Please enter a subject",
  }),
  message: z
    .string()
    .min(5, {
      message: "Message must be at least 5 characters",
    })
    .max(200, {
      message: "Message must not be longer than 200 characters",
    }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col gap-4 px-[15px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message"
                    className="min-h-36 resize-none "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button
          variant="outline"
          className="mt-6 h-[40px] w-[144px] rounded-none border-2 border-[#E31C25] bg-transparent px-[12px] py-[6px] text-[16px] text-[#E31C25] hover:bg-[#E31C25] hover:text-white "
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
