import React from "react";
import AboutContent from "../ui/AboutContent";
import { notFound } from "next/navigation";

async function Getdata() {
  // const res = await fetch("https://api.codingthailand.com/api/version", {
  //   next: {
  //     revalidate: 10,
  //   },
  // });
  const res = await fetch("https://api.codingthailand.com/api/version", {
    cache: "no-store",
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("ไม่สามารถดึงข้อมูลได้");
  }
  return res.json();
}

export default async function About() {
  const data = await Getdata();
  return (
    <>
      <AboutContent data={data.data} />
    </>
  );
}
