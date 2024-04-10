"use client";

import cx from "classnames";
import ModalSubmitButton from "@/components/common/Button/ModalSubmitButton";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {
  setSignUpModalOpen,
  setVerifyEmailModalOpen,
} from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const SignUpModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.signUpModalOpen);

  const handleCloseModal = () => {
    dispatch(setSignUpModalOpen(false));
  };

  const handleSignUp = () => {
    handleCloseModal();
    dispatch(setVerifyEmailModalOpen(true));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="w-full max-w-md space-y-8 rounded-2xl bg-primary px-10 py-8 sm:px-6 sm:py-8">
        <p className="modal-header">Sign up</p>
        <div className="space-y-10">
          <div className="space-y-4">
            <input type="text" className="modal-input" placeholder="Email" />
            <input type="text" className="modal-input" placeholder="Password" />
            <input
              type="text"
              className="modal-input"
              placeholder="Repeat Password"
            />
          </div>
          <ModalSubmitButton text="Continue" onClick={handleSignUp} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
