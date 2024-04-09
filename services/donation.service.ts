import axios from "axios";

export async function getUserDonations() {
  try {
    const response = await axios.get(`/api/donations/user`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
