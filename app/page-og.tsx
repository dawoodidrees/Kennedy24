"use client";

import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";

export default function Landing() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>
          Signed in as {session?.user?.email} <br />
        </p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
  return <p>Not signed in</p>;
}
