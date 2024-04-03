"use client";

import React, { createContext, useContext, useState } from "react";

type AuthContext = {
  userSignature: string;
  setUserSignature: React.Dispatch<React.SetStateAction<string>>;
};
export const AuthContext = createContext<AuthContext | null>(null);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userSignature, setUserSignature] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        userSignature,
        setUserSignature,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No context detected");
  }
  return context;
}
