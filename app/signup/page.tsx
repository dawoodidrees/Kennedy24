"use client";

import { OtpForm } from "@/components/common/otp-form";
import { SignupForm } from "@/components/common/signup-form";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Landing() {
  const { data: session } = useSession();
  const router = useRouter();
  const [displayKyc, setDisplayKyc] = useState(false);
  return (
    <div className="w-2/5 mx-auto">
      {!displayKyc && <SignupForm onSuccess={() => setDisplayKyc(true)} />}
      {displayKyc && (
        <OtpForm
          email="aniol@devstudios.digital"
          password="12345"
          onSuccess={() => {
            router.push("/");
          }}
        />
      )}
    </div>
  );
}
