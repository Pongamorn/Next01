import prisma from "@/lib/prisma";
import { Prisma, news_type } from "@prisma/client";

export async function getAllNewsType() {
  const res = await prisma.news_type.findMany({ orderBy: { id: "desc" } });
  return res;
}
export async function getOneNewsType(id: number) {
  return await prisma.news_type.findUnique({
    where: { id: id },
  });
}
export async function insertNewsType(data: Prisma.news_typeCreateInput) {
  return await prisma.news_type.create({
    data: {
      title: data.title,
    },
  });
}
export async function updateNewsType(
  id: number,
  data: Prisma.news_typeUpdateInput
) {
  return await prisma.news_type.update({ where: { id: id }, data: data });
}

export async function delateNewsType(id: number): Promise<news_type> {
  return await prisma.news_type.delete({ where: { id: id } });
}
