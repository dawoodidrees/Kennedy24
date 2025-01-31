"use client";
import { KycForm } from "@/components/common/kyc-form";
import NftCheckout from "@/components/common/nft-checkout";
// import { useGlobalContext } from "@/context/global-context";
import { createUserDonation } from "@/services/donation.service";
import { KycFormValues } from "@/types/kyc.interface";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Kyc({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [displayNftCheckout, setDisplayNftCheckout] = useState(false);
  const [kycFormValues, setKycFormValues] = useState<KycFormValues>();
  const handleFormSuccess = (data: KycFormValues) => {
    setDisplayNftCheckout(true);
    setKycFormValues(data);
  };
  // const { donationAmount } = useGlobalContext();
  const { data: session } = useSession();
  const [donationAmount, setDonationAmount] = useLocalStorage(
    "donationAmount",
    1
  );

  const handlePurchaseSuccess = async (orderId: string) => {
    const data = {
      campaignId: params.id,
      employer: kycFormValues?.employer || "",
      occupation: kycFormValues?.occupation || "",
      orderId,
      donationAmount,
    };
    console.log("before api call", data);
    await createUserDonation(data);

    // TODO: redirect to success page
    router.push("/");
  };
  return (
    <div className="container my-8">
      {!displayNftCheckout && (
        <KycForm
          collectionId={params.id}
          amount={donationAmount}
          onSuccess={handleFormSuccess}
        />
      )}
      {displayNftCheckout && (
        <div className="w-full flex justify-center">
          <NftCheckout
            collectionId={params.id}
            amount={donationAmount}
            userEmail={session?.user?.email || ""}
            onSuccess={handlePurchaseSuccess}
          />
        </div>
      )}
    </div>
  );
}
