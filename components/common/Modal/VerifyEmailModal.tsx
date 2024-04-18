"use client";

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { setVerifyEmailModalOpen } from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { validateOtp } from "@/services/user.service";
import { useToast } from "@/components/ui/use-toast";
import { usePathname } from "next/navigation";
import VerificationInput from "react-verification-input";

const VerifyEmailModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.verifyEmailModalOpen);
  const { toast } = useToast();
  const pathname = usePathname();
  const { signupUserEmail, signupUserPassword } = useAppSelector(
    (state) => state.modal
  );

  const handleCloseModal = () => {
    dispatch(setVerifyEmailModalOpen(false));
  };

  const handleVerify = async (otp: string) => {
    try {
      await validateOtp(signupUserEmail, otp);
      console.log({ callbackUrl: `${pathname}/kyc` });
      signIn("credentials", {
        email: signupUserEmail,
        password: signupUserPassword,
        callbackUrl: `${pathname}/kyc`,
      });

      toast({
        title: "Success!",
        description: "Logged in successfully",
      });
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "There was an error creating the account",
      });
    }
    handleCloseModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="rounded-2xl bg-primary max-w-[440px] pb-12">
        <p className="text-2xl font-bold text-center mt-3">
          Verify your email address
        </p>
        <p className={"text-center font-light text-white"}>
          We have sent you a 6 digit code.
          <br />
          Please, check your email
        </p>
        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
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
        </Form> */}
        <VerificationInput
          inputProps={{ inputMode: "numeric" }}
          placeholder="0"
          validChars="0-9"
          onComplete={handleVerify}
          classNames={{
            container: "mx-auto h-12 gap-4 w-fit sm:gap-1",
            character:
              "bg-white border-none h-12 w-12 rounded-lg text-base font-medium text-primary/40 flex items-center justify-center",
            characterFilled: "!text-primary",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default VerifyEmailModal;
