"use client";

import { LoginForm } from "@/components/common/login-form";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Landing() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="w-2/5 mx-auto">
      <LoginForm
        onSuccess={() => {
          router.push("/");
        }}
      />
    </div>
  );
}
