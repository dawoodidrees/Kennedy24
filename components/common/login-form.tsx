"use client";

import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { Icons } from "./icons";
import { signIn } from "next-auth/react";

export const FormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

interface LoginFormParams {
  // onSuccess: () => void;
}

export function LoginForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoadingSave(true);
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/collections/1",
      });

      toast({
        title: "Success!",
        description: "Webhook created successfully",
      });
      // onSuccess();
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "There was an error creating the webhook",
      });
    }
    // setIsLoadingSave(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Email</FormLabel>
              <FormControl>
                <Input id="email" {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Password</FormLabel>
              <FormControl>
                <Input id="password" {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={!form.formState.isValid}>
          {isLoadingSave ? (
            <Icons.spinner className="animate-spin mr-2 min-w-20" />
          ) : (
            <p>Log in</p>
          )}
        </Button>
      </form>
    </Form>
  );
}
