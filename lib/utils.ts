import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { recoverMessageAddress } from "viem";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPublicAddress(address: string): string {
  return (
    address.slice(0, 7) +
    ".." +
    address.slice(address.length - 5, address.length)
  );
}

export function formatUrl(url: string): string {
  return url.slice(0, 14) + ".." + url.slice(url.length - 12, url.length);
}

export function formatBalance(balance: string): string {
  return balance.substring(0, balance.indexOf(".") + 3);
}

export function parseEntry(entry: string): number[] {
  const numbers = entry.match(/.{1,2}/g);
  const result = [];
  if (numbers) {
    for (let i = 0; i < numbers.length; i++) {
      result.push(parseInt(numbers[i], 10));
    }
  }
  return result;
}

export function encodeEntry(entry: number[]): string {
  const paddedNumbers = entry.map((num) => num.toString().padStart(2, "0"));
  return paddedNumbers.join("");
}

export async function decodeSignature(userSignature: `0x${string}`) {
  const message = process.env.NEXT_PUBLIC_USER_SIGNATURE_MESSAGE || "";
  return await recoverMessageAddress({
    message,
    signature: userSignature,
  });
}
