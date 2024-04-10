"use client";

import cx from "classnames";
import ModalSubmitButton from "@/components/common/Button/ModalSubmitButton";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { setCheckResetLinkModalOpen } from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const CheckResetLinkModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.checkResetLinkModalOpen);

  const handleCloseModal = () => {
    dispatch(setCheckResetLinkModalOpen(false));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="w-full max-w-md space-y-8 rounded-2xl bg-primary px-10 py-8 sm:px-6 sm:py-8">
        <p className="modal-header">Check your email</p>
        <div className="space-y-10">
          <p className="max-w-72 text-center font-light text-white">
            We have sent you a link to reset your password.
            <br />
            Please, check your email
          </p>
          <ModalSubmitButton text="Reset Password" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckResetLinkModal;
