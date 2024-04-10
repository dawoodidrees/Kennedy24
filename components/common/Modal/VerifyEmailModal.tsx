"use client";

import VerificationInput from "react-verification-input";
import cx from "classnames";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { setVerifyEmailModalOpen } from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const VerifyEmailModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.verifyEmailModalOpen);

  const handleCloseModal = () => {
    dispatch(setVerifyEmailModalOpen(false));
  };

  const handleVerify = () => {
    handleCloseModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="w-full max-w-md space-y-8 rounded-2xl bg-primary px-[30px] pb-24 pt-16 sm:px-4 sm:pt-8">
        <div>
          <p className="modal-header">Verify your email address</p>
          <p className={"text-center font-light text-white"}>
            We have sent you a 6 digit code.
            <br />
            Please, check your email
          </p>
        </div>
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
