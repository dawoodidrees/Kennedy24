export interface Webhook {
  name: string;
  wallet: string;
  url: string;
  minAmount: number;
  onlySignedBy: boolean;
}
