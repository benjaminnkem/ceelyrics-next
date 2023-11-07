import prisma from "@/lib/utils/prisma_db";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await prisma.user.findFirst({ where: { name: "Benjamin" } });

  console.log(user);

  return NextResponse.json({});
}
