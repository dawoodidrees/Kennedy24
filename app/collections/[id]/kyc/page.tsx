"use client";
import { KycForm } from "@/components/common/kyc-form";
import NftCheckout from "@/components/common/nft-checkout";
import { createUserDonation } from "@/services/donation.service";
import { KycFormValues } from "@/types/kyc.interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Kyc({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [displayNftCheckout, setDisplayNftCheckout] = useState(false);
  const [kycFormValues, setKycFormValues] = useState<KycFormValues>();
  const handleFormSuccess = (data: KycFormValues) => {
    setDisplayNftCheckout(true);
    setKycFormValues(data);
  };

  // TODO: remove hardcoded tokenId & amount
  const handlePurchaseSuccess = async (orderId: string) => {
    const data = {
      campaignId: params.id,
      amount: 0,
      tokenId: 0,
      employer: kycFormValues?.employer || "",
      occupation: kycFormValues?.occupation || "",
      orderId,
    };
    console.log("before api call", data);
    await createUserDonation(data);

    // redirect to success page
    router.push("/");
  };
  // TODO: remove hardcoded email for actual user email one
  return (
    <div className="container my-8">
      {!displayNftCheckout && (
        <KycForm
          collectionId={params.id}
          amount={60.0}
          onSuccess={handleFormSuccess}
        />
      )}
      {displayNftCheckout && (
        <div className="w-full flex justify-center">
          <NftCheckout
            collectionId={params.id}
            amount={1}
            userEmail="aniol@devstudios.digital"
            onSuccess={handlePurchaseSuccess}
          />
        </div>
      )}
    </div>
  );
}
