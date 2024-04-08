import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify({ users }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error retrieving users" }), {
      status: 404,
    });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const apiKey = request.headers.get("x-api-key");
  try {
    if (apiKey === process.env.ADMIN_API_KEY) {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
        },
      });
      return new Response(JSON.stringify({ user }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 404,
    });
  }
}
