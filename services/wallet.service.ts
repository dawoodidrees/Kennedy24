import axios from "axios";

interface WalletConfig {
  walletAddress: string;
  walletName: string;
  webhookUrl: string;
  onlySignedByThem: boolean;
  minSolanaChange: number;
  // Add any other fields that are relevant to your wallet configuration
}





// Fetch a wallet by its address
export async function getWallet(walletAddress: string,  authToken: string) {
  try {
    const response = await axios.get(`/api/wallets/${walletAddress}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.error("Error fetching wallet:", err);
    throw err; // Re-throw to handle it on a higher level (if needed)
  }
}

// Create a new wallet
export async function createWallet(wallet_config: WalletConfig, authToken: string) {
  try {
    const response = await axios.post(`/api/wallets`, wallet_config, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.error("Error creating wallet:", err);
    throw err; // Re-throw to handle it on a higher level (if needed)
  }
}

// Update an existing wallet
export async function updateWallet(walletAddress: number, updates: any,  authToken: string) {
  try {
    const response = await axios.put(`/api/wallets/${walletAddress}`, updates, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.error("Error updating wallet:", err);
    throw err; 
  }
}

// Delete a wallet by its ID
export async function deleteWallet(walletAddress: number, authToken: string) {
  try {
    const response = await axios.delete(`/api/wallets/${walletAddress}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    console.log("Wallet deleted successfully.");
    return response.data;
  } catch (err) {
    console.error("Error deleting wallet:", err);
    throw err;
  }
}
