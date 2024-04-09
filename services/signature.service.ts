import axios from "axios";
import { Signature } from "@/types/signature.interface";

export async function getSignatureValues(
  collectionId: string,
  email: string
): Promise<Signature | null> {
  try {
    const response = await axios.post(`/api/kyc/sign`, {
      collectionId,
      email,
    });
    const sig: Signature = Object.assign(response.data.signature);
    return sig;
  } catch (err) {
    console.log(err);
    return null;
  }
}
