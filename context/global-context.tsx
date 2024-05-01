"use client";

import React, { createContext, useContext, useState } from "react";

type GlobalContext = {
  donationAmount: number;
  setDonationAmount: React.Dispatch<React.SetStateAction<number>>;
};
export const GlobalContext = createContext<GlobalContext | null>(null);

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [donationAmount, setDonationAmount] = useState<number>(0);

  return (
    <GlobalContext.Provider
      value={{
        donationAmount,
        setDonationAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("No context detected");
  }
  return context;
}
