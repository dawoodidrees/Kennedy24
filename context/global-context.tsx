"use client";

import React, { createContext, useContext, useState } from "react";

type GlobalContext = {
  showConfetti: boolean;
  setShowConfetti: React.Dispatch<React.SetStateAction<boolean>>;
};
export const GlobalContext = createContext<GlobalContext | null>(null);

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        showConfetti,
        setShowConfetti,
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
