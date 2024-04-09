import { LoginFormValues, ValidateOtpValues } from "@/types/login.interface";
import axios from "axios";

export async function getUser(address: string) {
  try {
    const response = await axios.get(`/api/users/${address}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function isAddressWhitelisted(address: string): Promise<boolean> {
  try {
    const response = await axios.get(`/api/users/${address}/whitelisted`);
    return response.data.isWhitelisted;
  } catch (err) {
    // console.log(err);
    return false;
  }
}

export async function createUser(email: string, password: string) {
  const body: LoginFormValues = { email, password };
  try {
    const response = await axios.post("/api/auth/signup", body);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function validateOtp(email: string, otp: string) {
  const body: ValidateOtpValues = { email, otp };
  try {
    const response = await axios.post("/api/auth/signup/otp", body);
    return response.data;
  } catch (err) {
    throw err;
  }
}

// export async function updateUser(address: string, body: any) {
//   try {
//     const response = await axios.put(`/api/users/${address}`, body);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }
