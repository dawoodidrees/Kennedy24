import { CreateUserDonationDTO } from "@/types/donation.interface";
import axios from "axios";

export async function getUserDonations() {
  try {
    const response = await axios.get(`/api/donations/user`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createUserDonation(data: CreateUserDonationDTO) {
  try {
    const response = await axios.post(`/api/donations/user`, data);
    console.log("response form api", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
