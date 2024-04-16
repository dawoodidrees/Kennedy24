"use client";
import { KycForm } from "@/components/common/kyc-form";
import NftCheckout from "@/components/common/nft-checkout";
import { useState } from "react";

export default function Kyc({ params }: { params: { id: string } }) {
  const [displayNftCheckout, setDisplayNftCheckout] = useState(false);
  const onSuccess = () => {
    setDisplayNftCheckout(true);
  };
  return (
    <div className="container my-8">
      <KycForm collectionId={params.id} amount={60.0} onSuccess={onSuccess} />
      {displayNftCheckout && (
        <div className="w-4/5 flex justify-end">
          <NftCheckout
            collectionId={params.id}
            amount={1}
            userEmail="aniol@devstudios.digital"
            onSuccess={() => {}}
          />
        </div>
      )}
    </div>
  );
}
