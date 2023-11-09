import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { hash, genSalt } from "bcrypt";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Prisma.userCreateInput;
  console.log(body.email);

  //1.checking email
  const checking = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  console.log("checking", checking);

  if (checking !== null) {
    return NextResponse.json(
      { message: "มี email ในระบบแล้ว" },
      { status: 400 }
    );
  }

  //2. เข้ารหัส

  const salt = await genSalt(10);
  const hashPassword = await hash(body.password, salt);

  //3.เพิ่มลง DB

  await prisma.user.create({
    data: {
      fullname: body.fullname,
      email: body.email,
      password: hashPassword,
    },
  });

  return NextResponse.json({ message: "สมัครสมาชิกสำเร็จ" }, { status: 201 });
}
