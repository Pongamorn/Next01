import prisma from "@/lib/prisma";
import {
  delateNewsType,
  getOneNewsType,
  updateNewsType,
} from "@/services/newstype-service";
import { Prisma } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const data = await getOneNewsType(+params.params.id);

  if (!data) {
    return NextResponse.json({ Message: "ไม่มีข้อมูล" }, { status: 404 });
  }
  return NextResponse.json(data);
}

export async function PUT(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const id = +params.params.id;
  const data = await getOneNewsType(id);

  if (!data) {
    return NextResponse.json({ Message: "ไม่มีข้อมูล" }, { status: 404 });
  }

  //UPDATE
  const bodyjson = await request.json();
  //   const dataUpdate = await prisma.news_type.update({
  //     where: { id: id },
  //     data: bodyjson,
  //   });
  const dataUpdate = await updateNewsType(id, bodyjson);

  return NextResponse.json(dataUpdate);
}
export async function DELETE(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const id = +params.params.id;
  const data = await getOneNewsType(id);

  if (!data) {
    return NextResponse.json({ Message: "ไม่มีข้อมูล" }, { status: 404 });
  }

  await delateNewsType(id);

  return NextResponse.json({ message: "ลบแล้ว" });
}
