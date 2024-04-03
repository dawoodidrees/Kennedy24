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

// export async function createUser(address: string) {
//   const body = {
//     publicKey: address,
//     username: "app-user_" + Math.random().toString(36).slice(2, 8),
//   };
//   try {
//     const response = await axios.post(`/api/users`, body);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function updateUser(address: string, body: any) {
//   try {
//     const response = await axios.put(`/api/users/${address}`, body);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }
