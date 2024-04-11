"use client";

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {
  setLoginModalOpen,
  setResetPasswordModalOpen,
  setSignUpModalOpen,
} from "@/redux/slices/modal";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Icons } from "../icons";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const LoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  const handleCloseModal = () => {
    onClose();
    dispatch(setLoginModalOpen(false));
  };

  const handleSignUp = () => {
    handleCloseModal();
    dispatch(setSignUpModalOpen(true));
  };

  const handleForgotPassword = () => {
    handleCloseModal();
    dispatch(setResetPasswordModalOpen(true));
  };

  const handleLogin = () => {
    handleCloseModal();
    dispatch(setResetPasswordModalOpen(true));
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoadingSave(true);
    try {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });

      toast({
        title: "Success!",
        description: "Logged in successfully",
      });
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "There was an error logging in",
      });
    }
    setIsLoadingSave(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="rounded-2xl bg-primary max-w-[440px]">
        <p className="text-xl font-bold text-center">Log in</p>
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
                      placeholder="Email"
                      type="email"
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
                      placeholder="Password"
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <p
              className="text-end text-zinc-400 cursor-pointer"
              onClick={handleForgotPassword}
            >
              Forgot your password?
            </p>
            <div className="flex items-baseline justify-between border-t border-white pt-4">
              <p className="font-medium text-white/60">
                Don&apos;t have an account?
              </p>
              <button
                className="font-semibold text-white underline"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              variant="submit"
              size="submit"
              className="mt-8"
            >
              {isLoadingSave ? (
                <Icons.spinner className="animate-spin mr-2 min-w-20" />
              ) : (
                <div className="flex w-full items-center justify-center gap-1">
                  <p className="font-bold text-white">Log in</p>
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

export default LoginModal;
