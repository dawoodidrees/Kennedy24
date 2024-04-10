"use client";

import ModalSubmitButton from "@/components/common/Button/ModalSubmitButton";
import useAppDispatch from "@/hooks/useAppDispatch";
import { setConfirmCodeModalOpen } from "@/redux/slices/modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const BuyNFTModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const handleBuy = () => {
    onClose();
    dispatch(setConfirmCodeModalOpen(true));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md space-y-8 rounded-2xl bg-primary px-10 py-8 sm:px-6 sm:py-8">
        <p className="modal-header">Buy NFT</p>
        <div className="space-y-10">
          <div className="space-y-4">
            <input type="text" className="modal-input" placeholder="Email" />
            <input type="text" className="modal-input" placeholder="Password" />
          </div>
          <ModalSubmitButton text="Buy" onClick={handleBuy} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BuyNFTModal;
