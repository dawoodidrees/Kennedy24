"use client";

import { KycForm } from "@/components/common/kyc-form";
import { getSignatureValues } from "@/services/signature.service";
import { Signature } from "@/types/signature.interface";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface NftCheckoutParams {
  collectionId: string;
  amount: number;
  userEmail: string;
  onSuccess: () => void;
}

export default function NftCheckout({
  collectionId,
  amount,
  userEmail,
  onSuccess,
}: NftCheckoutParams) {
  const [signatureValues, setSignatureValues] = useState<Signature>();

  useEffect(() => {
    getSignatureValuesFromApi();
  }, []);

  const getSignatureValuesFromApi = async () => {
    const result = await getSignatureValues(collectionId, userEmail);
    if (result) {
      setSignatureValues(result);
    }
  };

  if (!signatureValues) return <Skeleton className="w-full h-64" />;

  return (
    <CrossmintPayButton
      collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID || ""}
      projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID || ""}
      mintConfig={{
        totalPrice: (amount / 1e6).toString(),
        donation: amount.toString(),
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
  );
}
