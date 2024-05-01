"use client";

import { KycForm } from "@/components/common/kyc-form";
import { getSignatureValues } from "@/services/signature.service";
import { Signature } from "@/types/signature.interface";
import {
  CrossmintEvent,
  CrossmintPayButton,
  CrossmintPaymentElement,
} from "@crossmint/client-sdk-react-ui";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { createUserDonation } from "@/services/donation.service";

interface NftCheckoutParams {
  collectionId: string;
  amount: number;
  userEmail: string;
  onSuccess: (orderId: string) => void;
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

  const handleEvent = async (event: CrossmintEvent) => {
    if (event.type === "payment:process.succeeded") {
      onSuccess(event.payload.orderIdentifier);
    } else if (
      event.type === "payment:process.canceled" ||
      event.type === "payment:process.rejected"
    ) {
      // TODO: redirect to error page
      // also store identifier but with error flag?
    }
  };

  if (!signatureValues) return <Skeleton className="w-1/4 mx-auto h-96" />;

  return (
    <CrossmintPaymentElement
      collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID || ""}
      projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID || ""}
      mintConfig={{
        totalPrice: amount.toString(), // value in USD
        donation: (amount * 1e6).toString(), // value in USDC (6 decimals)
        email: userEmail,
        _v: signatureValues.v,
        _r: signatureValues.r,
        _s: signatureValues.s,
      }}
      environment={
        // process.env.NODE_ENV === "development" ? "staging" : "production"
        "staging"
      }
      currency="USD"
      // checkoutProps={{ paymentMethods: ["fiat"] }}
      // emailTo={userEmail}
      paymentMethod="fiat"
      recipient={{ email: userEmail }}
      onEvent={(event) => {
        handleEvent(event);
      }}
    />
  );
}
