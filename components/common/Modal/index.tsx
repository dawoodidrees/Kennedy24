import CheckResetLinkModal from "./CheckResetLinkModal";
import ConfirmCodeModal from "./ConfirmCodeModal";
import ResetPasswordModal from "./ResetPasswordModal";
import SignUpModal from "./SignUpModal";
import VerifyEmailModal from "./VerifyEmailModal";

const Modal = () => {
  return (
    <>
      <SignUpModal />
      <ResetPasswordModal />
      <CheckResetLinkModal />
      <VerifyEmailModal />
      <ConfirmCodeModal />
    </>
  );
};

export default Modal;
