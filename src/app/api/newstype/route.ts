import prisma from "@/lib/prisma";
import { getOneNewsType, insertNewsType } from "@/services/newstype-service";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // const id = 2;
  //   const data = await prisma.news_type.findUnique({ where: { id: id } });
  const data = await prisma.news_type.findMany();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Prisma.news_typeCreateInput;

  if (body.title === "news") {
    return NextResponse.json({ data: "cannot" }, { status: 500 });
  } else {
    const data = await insertNewsType(body);
    return NextResponse.json({ data: data }, { status: 201 });
  }
}
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  await prisma.news_type.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ message: `ลบ ID ${id} แล้ว` }, { status: 201 });
}
