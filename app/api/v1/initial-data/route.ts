import { prisma } from "@/lib/utils/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const user = await prisma.user.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      firstName: "Benjamin",
      lastName: "Nkem",
      email: "admin@admin.com",
      role: "admin",
    },
  });

  const data = await prisma.user.findMany();

  const payload = {
    name: "benjamin nkem",
    data,
  };
  return NextResponse.json(payload);
}
