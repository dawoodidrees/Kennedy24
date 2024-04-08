import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, password }: { email: string; password: string } = body;

  await prisma.user.upsert({
    where: { email },
    create: { email, password },
    update: {},
  });

  return NextResponse.json({ email });
}
