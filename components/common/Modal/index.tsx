import CheckResetLinkModal from './CheckResetLinkModal'
import ConfirmCodeModal from './ConfirmCodeModal'
import LoginModal from './LoginModal'
import ResetPasswordModal from './ResetPasswordModal'
import SignUpModal from './SignUpModal'
import VerifyEmailModal from './VerifyEmailModal'

const Modal = () => {
	return (
		<>
			<LoginModal />
			<SignUpModal />
			<ResetPasswordModal />
			<CheckResetLinkModal />
			<VerifyEmailModal />
			<ConfirmCodeModal />
		</>
	)
}

export default Modal
