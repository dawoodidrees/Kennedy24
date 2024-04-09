"use client";

import { KycForm } from "@/components/common/kyc-form";
import { getSignatureValues } from "@/services/signature.service";
import { Signature } from "@/types/signature.interface";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useEffect, useState } from "react";

export default function Collection({ params }: { params: { id: string } }) {
  // TODO: address from Crossmint or use email instead (if we change contract logic to sign with email)
  const [userAddress] = useState("0xaB497Af59DDaA2C7627e8f43D356816C9f87879F");
  const [userEmail] = useState("aniol@devstudios.digital");
  const [donation, setDonation] = useState<number>(0);
  const [signatureValues, setSignatureValues] = useState<Signature>();

  useEffect(() => {
    getSignatureValuesFromApi();
  }, []);

  const getSignatureValuesFromApi = async () => {
    const result = await getSignatureValues(params.id, userEmail);
    if (result) {
      setSignatureValues(result);
    }
  };

  return (
    <div>
      <h1>Collection {params.id}</h1>
      {signatureValues && (
        <CrossmintPayButton
          collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID || ""}
          projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID || ""}
          mintConfig={{
            totalPrice: (donation / 1e6).toString(),
            donation: donation.toString(),
            email: userEmail,
            _v: signatureValues.v,
            _r: signatureValues.r,
            _s: signatureValues.s,
          }}
          environment={
            process.env.NODE_ENV === "development" ? "staging" : "production"
          }
          currency="USD"
          checkoutProps={{ paymentMethods: ["fiat"] }}
          emailTo={userEmail}
        />
      )}
      {/* <KycForm collectionId={params.id} amount={60.0} onSuccess={() => {}} /> */}
    </div>
  );
}
