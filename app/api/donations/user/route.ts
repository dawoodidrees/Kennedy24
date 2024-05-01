import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  try {
    const session = await getToken({ req });
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { id } = session;

    const donations = await prisma.userDonation.findMany({
      where: {
        user_id: id as string,
      },
    });
    return new Response(JSON.stringify({ donations }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error retrieving donations" }),
      {
        status: 404,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  const { campaignId, employer, occupation, orderId, donationAmount } =
    await req.json();
  try {
    const session = await getToken({ req });
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { id } = session;

    const newDonation = await prisma.userDonation.create({
      data: {
        user_id: id as string,
        campaign_id: campaignId as string,
        order_id: orderId,
        amount: donationAmount,
        employer,
        occupation,
      },
    });
    console.log("created new userDonation", newDonation);
    return new Response(JSON.stringify({ newDonation }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error retrieving donations" }),
      {
        status: 404,
      }
    );
  }
}
