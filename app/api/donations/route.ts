import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const donations = await prisma.tCSUserDonation.findMany();
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

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const apiKey = request.headers.get("x-api-key");
//   try {
//     if (apiKey === process.env.X_API_KEY) {
//       const wallet = await prisma.tCSUserDonation.create({
//         data: {
//           username: body.username,
//           publicKey: body.publicKey,
//         },
//       });
//       return new Response(JSON.stringify({ wallet }), { status: 200 });
//     }
//     return new Response(JSON.stringify({ error: "Unauthorized" }), {
//       status: 401,
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: "Error retrieving wallets" }), {
//       status: 404,
//     });
//   }
// }
