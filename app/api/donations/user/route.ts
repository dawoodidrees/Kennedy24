import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  try {
    const session = await getToken({ req });
    console.log({ session });

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
