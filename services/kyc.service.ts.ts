import axios from "axios";
import { KycFormValues } from "@/types/kyc.interface";

export async function submitKyc(
  collectionId: string,
  kycValues: KycFormValues
) {
  try {
    const response = await axios.post(`/api/kyc`, {
      collectionId,
      kycValues,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
