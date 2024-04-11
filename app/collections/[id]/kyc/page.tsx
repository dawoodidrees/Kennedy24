"use client";
import { KycForm } from "@/components/common/kyc-form";

export default function Kyc({ params }: { params: { id: string } }) {
  const onSuccess = () => {};
  return (
    <div className="container my-8">
      <KycForm collectionId={params.id} amount={60.0} onSuccess={onSuccess} />
    </div>
  );
}
