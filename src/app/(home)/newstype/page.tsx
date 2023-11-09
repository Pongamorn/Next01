import { getAllNewsType } from "@/services/newstype-service";
import React from "react";

export default async function newstype() {
  const data = await getAllNewsType();
  return <div>{JSON.stringify(data)}</div>;
}
