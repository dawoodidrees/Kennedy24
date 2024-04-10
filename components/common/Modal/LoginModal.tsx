"use client";

import cx from "classnames";
import ModalSubmitButton from "@/components/common/Button/ModalSubmitButton";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {
  setLoginModalOpen,
  setResetPasswordModalOpen,
  setSignUpModalOpen,
} from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const LoginModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.loginModalOpen);

  const handleCloseModal = () => {
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

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="w-full max-w-md space-y-8 rounded-2xl bg-primary px-10 py-8 sm:px-6 sm:py-8">
        <p className="modal-header">Log in</p>
        <div className="space-y-10">
          <div className="space-y-4">
            <input type="text" className="modal-input" placeholder="Email" />
            <div className="space-y-2">
              <input
                type="text"
                className="modal-input"
                placeholder="Password"
              />
              <button
                className="ml-auto mt-2 block text-sm leading-[1.2] text-white/60"
                onClick={handleForgotPassword}
              >
                Forgot your password?
              </button>
            </div>
            <div className="flex items-baseline justify-between border-t border-white pt-6">
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
          </div>
          <ModalSubmitButton text="Continue" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
