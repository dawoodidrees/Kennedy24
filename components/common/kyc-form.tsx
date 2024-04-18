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
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { KycFormValues } from "@/types/kyc.interface";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { Icons } from "./icons";
import { submitKyc } from "@/services/kyc.service.ts";

export const FormSchema = z.object({
  employer: z.string(),
  occupation: z.string(),
  acceptTerms: z.boolean(),
});

interface KycFormParams {
  collectionId: string;
  amount: number;
  onSuccess: (data: KycFormValues) => void;
}

export function KycForm({ collectionId, amount, onSuccess }: KycFormParams) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      acceptTerms: false,
    },
  });
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoadingSave(true);
    try {
      const result: KycFormValues = {
        employer: data.employer,
        occupation: data.occupation,
        acceptTerms: Boolean(data.acceptTerms),
      };
      // await submitKyc(collectionId, body);
      // toast({
      //   title: "Success!",
      //   description: "Webhook created successfully",
      // });
      onSuccess(result);
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "There was an error creating the webhook",
      });
    }
    setIsLoadingSave(false);
  }

  return (
    <div className="w-3/5 mx-auto">
      <p className="text-sm font-bold mb-4">Contribution rules</p>
      <p className="text-sm leading-7">
        1. I am a U.S. citizen or a lawfully admitted permanent resident (i.e.,
        green card holder). 2. This contribution is made from my own funds, and
        funds are not being provided to me by another person or entity to make
        this contribution. 3. I am at least eighteen years old. 4. I am not a
        federal contractor. 5. I am making this contribution with my own
        personal credit card and not with a corporate or business credit card or
        a card issued to another person or entity. Note: Contributions to Team
        Kennedy are not tax deductible. Federal law allows individuals to
        contribute up to $3,300 and multi-candidate political action committees
        (PACs) to contribute up to $5,000. Federal law prohibits contributions
        from corporations, labor unions, federal contractors, national banks,
        and foreign nationals. All contributions must be made by personal funds,
        and they may not be reimbursed by any person or entity. By providing
        your telephone number and email, you consent to receive calls, texts,
        and emails from Team Kennedy, including prerecorded messages and via
        automated methods. Msg & data rates may apply. Msg frequency may vary.
        For texts, reply STOP to opt-out & HELP for help. For emails, click the
        &quot;unsubscribe link&quot; in the footer of the email if you no longer
        wish to receive such emails. View our Terms of Service and Privacy
        Policy for more info.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-6">
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="employer"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel htmlFor={field.name}>Employer</FormLabel>
                  <FormControl>
                    <Input
                      id="employer"
                      {...field}
                      min={0}
                      className="text-start text-black border-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel htmlFor={field.name}>Occupation</FormLabel>
                  <FormControl>
                    <Input
                      id="occupation"
                      {...field}
                      className="text-start text-black border-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <p className="text-sm leading-7 text-[#2B2C78]">
            Federal Law requires we ask for your name, address, employer and
            occupation. If you don&apos;t have an employer or are retired, put
            N/A, and if you are self-employed put &quot;self-employed&quot; in
            employer and describe your occupation.
          </p>
          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>
                  I confirm that the above statements are true and accurate.
                </FormLabel>
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <div className="flex flex-col gap-2">
              <p className="text-[#2B2C78]">Subtotal: ${amount} USD</p>
              <Button type="submit" disabled={!form.formState.isValid}>
                {isLoadingSave ? (
                  <Icons.spinner className="animate-spin mr-2 min-w-20" />
                ) : (
                  <p>Check out</p>
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
