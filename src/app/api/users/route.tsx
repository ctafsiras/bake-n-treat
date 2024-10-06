import db from "@/libs/prismadb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const users = await db.user.findMany();
  return Response.json(users);
}
