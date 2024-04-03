import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.tCSUser.findMany();
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
    if (apiKey === process.env.X_API_KEY) {
      const user = await prisma.tCSUser.create({
        data: {
          name: body.name,
          email: body.email,
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
