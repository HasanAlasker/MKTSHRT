// api/shorten
import { generateCode } from "@/app/functions/generateCode";
import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { originalLink } = await request.json();

    const exists = await prisma.link.findUnique({
      where: { originalLink },
    });
    if (exists)
      return NextResponse.json({
        shortCode: exists.shortCode,
        originalLink,
        clicked: exists.clicked,
        createdAt: exists.createdAt,
      });

    const generatedCode = generateCode();
    const savedLink = await prisma.link.create({
      data: { originalLink: originalLink, shortCode: generatedCode },
    });

    if (!savedLink)
      return NextResponse.json(
        { error: "Server error, not saved" },
        { status: 500 },
      );

    return NextResponse.json({
      shortCode: generatedCode,
      originalLink,
      clicked: savedLink.clicked,
      createdAt: savedLink.createdAt,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
