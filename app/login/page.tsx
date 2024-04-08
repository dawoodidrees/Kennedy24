"use client";

import { LoginForm } from "@/components/common/login-form";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Landing() {
  const { data: session } = useSession();
  return (
    <div className="w-2/5 mx-auto">
      <LoginForm onSuccess={() => {}} />
    </div>
  );
}
