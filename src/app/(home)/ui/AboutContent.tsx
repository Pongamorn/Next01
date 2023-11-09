import { Divider, Text, Title } from "@mantine/core";
import React from "react";

export interface Data {
  version: string;
}

export default function AboutContent({ data: { version } }: any) {
  return (
    <>
      <Title order={3} mb={20}>
        เกี่ยวกับเรา
      </Title>
      <Divider mt={2} my={20} />
      <Text fs="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        officia rerum, vero nobis ut eum tempora non minus quam quasi sequi quod
        soluta dolores ipsa! Cumque corrupti eligendi quisquam delectus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia
        rerum, vero nobis ut eum tempora non minus quam quasi sequi quod soluta
        dolores ipsa! Cumque corrupti eligendi quisquam delectus. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Assumenda officia rerum,
        vero nobis ut eum tempora non minus quam quasi sequi quod soluta dolores
        ipsa! Cumque corrupti eligendi quisquam delectus.
      </Text>
      <hr />
      <Text fs="sm">{version}</Text>
    </>
  );
}
