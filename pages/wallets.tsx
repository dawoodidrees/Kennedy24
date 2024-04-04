// pages/wallets.tsx
import Link from "next/link";

import { useState } from 'react';
import type { NextPage } from 'next';

interface Wallet {
  id: number;
  address: string;
  name?: string;
}

const WalletsPage: NextPage = () => {
  // Example wallet data
  const [wallets, setWallets] = useState<Wallet[]>([
    { id: 1, address: '0xABC123...', name: 'Wallet 1' },
    { id: 2, address: '0xDEF456...', name: 'Wallet 2' },
  ]);

  // Placeholder function for adding a new wallet
  const addWallet = () => {
    const newWallet: Wallet = {
      id: wallets.length + 1,
      address: `0xNEW${wallets.length + 1}...`,
      name: `Wallet ${wallets.length + 1}`,
    };
    setWallets([...wallets, newWallet]);
  };

  return (
    <div>
      <h1>My Wallets</h1>
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.id}>{wallet.name || wallet.address}</li>
        ))}
      </ul>
      <button onClick={addWallet}>Add Wallet</button>
    </div>
  );
};

export default WalletsPage;
