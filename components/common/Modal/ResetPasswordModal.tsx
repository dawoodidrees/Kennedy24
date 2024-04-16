"use client";

import cx from "classnames";
import ModalSubmitButton from "@/components/common/Button/ModalSubmitButton";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {
  setCheckResetLinkModalOpen,
  setResetPasswordModalOpen,
} from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ResetPasswordModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.resetPasswordModalOpen);

  const handleCloseModal = () => {
    dispatch(setResetPasswordModalOpen(false));
  };

  const handleResetPassword = () => {
    handleCloseModal();
    dispatch(setCheckResetLinkModalOpen(true));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="w-full max-w-md space-y-8 rounded-2xl bg-primary px-10 py-8 sm:px-6 sm:py-8">
        <p className="modal-header">Enter your email</p>
        <div className="space-y-10">
          <input type="text" className="modal-input" placeholder="Email" />
          <ModalSubmitButton
            text="Reset Password"
            onClick={handleResetPassword}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordModal;
