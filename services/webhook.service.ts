import axios from "axios";
import { Webhook } from "@/types/webhook.interface";

export async function getUserWebhooks(address: string): Promise<Webhook[]> {
  try {
    const response = await axios.get(`/api/webhooks/${address}`);
    const webhooks: Webhook[] = response.data.map((webhookData: any) => {
      return {
        name: webhookData.wallet_name,
        wallet: webhookData.Wallets.wallet_address,
        url: webhookData.webhook_url,
        minAmount: webhookData.min_solana_change,
        onlySignedBy: webhookData.only_signed_by_them,
      };
    });
    return webhooks;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function createWebhook(userAddress: string, body: Webhook) {
  try {
    const response = await axios.post(`/api/webhooks/${userAddress}`, body);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function sendTestWebhook(webhookUrl: string) {
  try {
    const response = await axios.post(`/api/webhooks/test`, {
      webhookUrl,
      message: "Message from PocketWatch!",
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("The submitted URL is not reachable");
  }
}
