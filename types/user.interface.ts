export interface UserDto {
  walletAddress: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  location: string;
}

export interface UserModelDto {
  wallet_address: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  image_url: string;
  location: string;
  verified: boolean;
}
