import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import Web3 from "web3";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log({ body });

  return new Response(JSON.stringify({ error: "Collection not found" }), {
    status: 404,
  });
}
