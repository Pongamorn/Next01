"use client";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function loading() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}
