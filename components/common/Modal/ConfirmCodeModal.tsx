"use client";

import { useRouter } from "next/navigation";
import VerificationInput from "react-verification-input";
import cx from "classnames";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { setConfirmCodeModalOpen } from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ConfirmCodeModal = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.confirmCodeModalOpen);

  const handleCloseModal = () => {
    dispatch(setConfirmCodeModalOpen(false));
  };

  const handleConfirmCode = () => {
    router.push("/collection/mint");
    handleCloseModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="w-full max-w-md space-y-8 rounded-2xl bg-white px-10 pb-24 pt-8 shadow-[0px_4px_70px_#00000014] sm:px-6">
        <p className="modal-header !text-primary">Enter the code</p>
        <VerificationInput
          inputProps={{ inputMode: "numeric" }}
          placeholder="0"
          validChars="0-9"
          onComplete={handleConfirmCode}
          classNames={{
            container: "mx-auto h-12 gap-4 w-fit sm:gap-1",
            character:
              "bg-primary border-none h-12 w-12 text-base font-medium text-white/40 flex items-center justify-center placeholder",
            characterFilled: "!text-white",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmCodeModal;
