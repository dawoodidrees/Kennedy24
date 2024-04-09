import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password }: { email: string; password: string } = body;
    const hashedPassword = await hash(password, 10);

    if (email) {
      // Generate OTP
      const otp = generateOTP();

      // Store new user in database
      const user = await prisma.user.create({
        data: { email, password: hashedPassword, otp },
      });

      // Send OTP to email
      await sendOtpEmail(email, otp);
      return new Response(
        JSON.stringify({ user: { id: user.id, email: user.email } }),
        { status: 200 }
      );
    }
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 404,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 404,
    });
  }
}

async function sendOtpEmail(email: string, otp: string) {
  const from = `Mint4Change <${process.env.RESEND_FROM_ADDRESS}>`;
  const subject = "[Mint4Change] Verify your account";
  return new Promise((resolve, reject) => {
    try {
      const data = resend.emails.send({
        from,
        to: [email],
        cc: [],
        bcc: [],
        subject,
        text: `Here is your OTP: ${otp}`,
      });
      resolve(data);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

function generateOTP(): string {
  const length = 6;
  const charset = "0123456789"; // Can include alphabets or special characters if needed
  let otp = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    otp += charset[randomIndex];
  }
  return otp;
}
