import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ shortCode: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { shortCode } = await params;

    const link = await prisma.link.findUnique({ where: { shortCode } });

    if (!link)
      return NextResponse.json(
        { error: "This code doesn't exist" },
        { status: 404 },
      );

    await prisma.link.update({
      where: { shortCode },
      data: { clicked: { increment: 1 } },
    });

    return NextResponse.redirect(link.originalLink);
    // redirect
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
