"use client";

import { LoginForm } from "@/components/common/login-form";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";

export default function Landing() {
  const { data: session } = useSession();
  const router = useRouter();
  const [donationAmount, setDonationAmount] = useLocalStorage(
    "donationAmount",
    1
  );
  const setDonation = () => {
    console.log("Set donation", 25);
    setDonationAmount(25);
  };

  return (
    <div className="w-2/5 mx-auto">
      <LoginForm
      // onSuccess={() => {
      //   router.push("/");
      // }}
      />
      <Button onClick={() => signOut()}>sign out</Button>
      <Button onClick={setDonation}>set donation</Button>
    </div>
  );
}
