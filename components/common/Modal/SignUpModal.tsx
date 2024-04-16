"use client";

import * as z from "zod";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {
  setSignUpModalOpen,
  setSignupUserData,
  setVerifyEmailModalOpen,
} from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { createUser } from "@/services/user.service";
import { Button } from "@/components/ui/button";
import { Icons } from "../icons";
import { Icon } from "@iconify/react/dist/iconify.js";

export const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

const SignUpModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.signUpModalOpen);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  const handleCloseModal = () => {
    dispatch(setSignUpModalOpen(false));
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoadingSave(true);
    try {
      await createUser(data.email, data.password);
      dispatch(
        setSignupUserData({ email: data.email, password: data.password })
      );
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "There was an error creating the webhook",
      });
    }
    setIsLoadingSave(false);
    handleCloseModal();
    dispatch(setVerifyEmailModalOpen(true));
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="rounded-2xl bg-primary max-w-[440px]">
        <p className="text-xl font-bold text-center">Create account</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel htmlFor={field.name}>Email</FormLabel> */}
                  <FormControl>
                    <Input
                      id="email"
                      {...field}
                      type="email"
                      placeholder="Email"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel htmlFor={field.name}>Password</FormLabel> */}
                  <FormControl>
                    <Input
                      id="password"
                      {...field}
                      type="password"
                      placeholder="Password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel htmlFor={field.name}>Confirm Password</FormLabel> */}
                  <FormControl>
                    <Input
                      id="confirmPassword"
                      {...field}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="submit"
              size="submit"
              disabled={!form.formState.isValid}
              className="mt-4"
            >
              {isLoadingSave ? (
                <Icons.spinner className="animate-spin mr-2 min-w-20" />
              ) : (
                <div className="flex w-full items-center justify-center gap-1">
                  <p className="font-bold text-white">Sign up</p>
                  <Icon icon="ph:caret-right-bold" className="text-white" />
                </div>
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
