import db from "@/libs/prismadb";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const product = await db.product.create({
    data: {
      ...data,
    },
  });

  return Response.json(product);
}

export async function GET() {
  const products = await db.product.findMany();

  return Response.json(products);
}
