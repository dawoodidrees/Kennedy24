import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const campaigns = await prisma.campaign.findMany();
    return new Response(JSON.stringify({ campaigns }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error retrieving campaigns" }),
      {
        status: 404,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const apiKey = request.headers.get("x-api-key");
  try {
    if (apiKey === process.env.ADMIN_API_KEY) {
      const campaign = await prisma.campaign.create({
        data: {
          name: body.name,
          contract_address: body.contractAddress.toLowerCase(),
        },
      });
      return new Response(JSON.stringify({ campaign }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error retrieving wallets" }), {
      status: 404,
    });
  }
}
