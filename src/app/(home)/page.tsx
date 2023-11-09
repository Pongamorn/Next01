import { Button } from "@mantine/core";
import Link from "next/link";
import HomeContent, { Btn2 } from "./ui/HomeContent";
import { HeroImageBackground } from "./ui/HeroImageBackground/HeroImageBackground";
import { FeaturesGrid } from "./ui/FeaturesGrid/FeaturesGrid";
import { getAllNewsType, getOneNewsType } from "@/services/newstype-service";

export default async function HomePage() {
  const data = await getAllNewsType();
  console.log("data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);
  const findUni = await getOneNewsType(1);
  console.log("data2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", findUni);
  return (
    <>
      <HeroImageBackground />
      <FeaturesGrid />
    </>
  );
}
