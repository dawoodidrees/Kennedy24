"use client";

import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues } from "@/types/login.interface";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { Icons } from "./icons";
import { signIn } from "next-auth/react";
import { createUser, validateOtp } from "@/services/user.service";

export const FormSchema = z.object({
  otp: z.string(),
});

interface OtpFormParams {
  email: string;
  password: string;
  onSuccess: () => void;
}

export function OtpForm({ email, password, onSuccess }: OtpFormParams) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoadingSave(true);
    try {
      await validateOtp(email, data.otp);
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });
      onSuccess();
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "There was an error creating the webhook",
      });
    }
    setIsLoadingSave(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>OTP</FormLabel>
              <FormControl>
                <Input id="otp" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={!form.formState.isValid}>
          {isLoadingSave ? (
            <Icons.spinner className="animate-spin mr-2 min-w-20" />
          ) : (
            <p>Sign up</p>
          )}
        </Button>
      </form>
    </Form>
  );
}
