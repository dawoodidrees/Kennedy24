"use client";

import { getSignatureValues } from "@/services/signature.service";
import { Signature } from "@/types/signature.interface";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useEffect, useState } from "react";

export default function Collection({ params }: { params: { id: string } }) {
  const [userAddress] = useState("0xaB497Af59DDaA2C7627e8f43D356816C9f87879F");
  const [donation, setDonation] = useState<number>(0);
  const [signatureValues, setSignatureValues] = useState<Signature>();

  useEffect(() => {
    getSignatureValuesFromApi();
  }, []);

  const getSignatureValuesFromApi = async () => {
    const result = await getSignatureValues(params.id, userAddress);
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
          projectId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID || ""}
          mintConfig={{
            totalPrice: (donation / 1e6).toString(),
            donation: donation.toString(),
            receiver: userAddress,
            _v: signatureValues.v,
            _r: signatureValues.r,
            _s: signatureValues.s,
          }}
          environment={
            process.env.NODE_ENV === "development" ? "staging" : "production"
          }
          currency="USD"
          checkoutProps={{ paymentMethods: ["fiat"] }}
          mintTo={userAddress}
        />
      )}
    </div>
  );
}
