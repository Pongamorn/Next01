"use client";

import { Button } from "@mantine/core";

export default function HomeContent() {
  return (
    <Button variant="filled" color="red" onClick={() => alert("hi")}>
      Button
    </Button>
  );
}

const Btn2 = () => {
  return (
    <Button variant="filled" onClick={() => alert("hi2")}>
      Button
    </Button>
  );
};

export { Btn2 };
