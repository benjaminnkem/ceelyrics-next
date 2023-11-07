import prisma from "@/lib/utils/prisma_db";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const data = await prisma.user.findMany();

  const payload = {
    data,
  };
  return NextResponse.json(payload);
}
