import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    // Get user OTP
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      // Check OTP is the same
      const otpIsCorrect = user.otp === otp;

      if (otpIsCorrect) {
        // If the OTP is correct, verify user in db
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            verified: true,
          },
        });

        return new Response(JSON.stringify({ user }), { status: 200 });
      }
    }

    return new Response(JSON.stringify({ error: "Error validating OTP" }), {
      status: 404,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error validating OTP" }), {
      status: 404,
    });
  }
}
