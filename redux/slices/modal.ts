import { createSlice } from '@reduxjs/toolkit'
import { IModal } from '../types/modal'

const initialState: IModal = {
	loginModalOpen: true,
	signUpModalOpen: false,
	resetPasswordModalOpen: false,
	checkResetLinkModalOpen: false,
	verifyEmailModalOpen: false,
	confirmCodeModalOpen: false,
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setLoginModalOpen(state, action) {
			state.loginModalOpen = action.payload
			return state
		},
		setSignUpModalOpen(state, action) {
			state.signUpModalOpen = action.payload
			return state
		},
		setResetPasswordModalOpen(state, action) {
			state.resetPasswordModalOpen = action.payload
			return state
		},
		setCheckResetLinkModalOpen(state, action) {
			state.checkResetLinkModalOpen = action.payload
			return state
		},
		setVerifyEmailModalOpen(state, action) {
			state.verifyEmailModalOpen = action.payload
			return state
		},
		setConfirmCodeModalOpen(state, action) {
			state.confirmCodeModalOpen = action.payload
			return state
		},
	},
})

export const {
	setLoginModalOpen,
	setSignUpModalOpen,
	setResetPasswordModalOpen,
	setCheckResetLinkModalOpen,
	setVerifyEmailModalOpen,
	setConfirmCodeModalOpen,
} = modalSlice.actions

export default modalSlice.reducer
