"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Table } from "@mantine/core";
import { Button } from "@mui/material";
import { delateNewsType } from "@/services/newstype-service";
import Link from "next/link";

function NTIndex() {
  const [nt, setNt] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/api/newstype");
    setNt(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  const columns = [
    { field: "id", headerName: "Column 1", width: 150 },
    { field: "title", headerName: "Column 2", width: 150, flex: 1 },
    { field: "create_at", headerName: "Column 2", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param: any) => {
        const ondelete = async () => {
          console.log("data", param.row.id);
          const res = await axios.delete("http://localhost:3000/api/newstype", {
            data: {
              id: param.row.id,
            },
          });
          alert("ลบข้อมูลเรียบร้อย");
        };
        return (
          <>
            <Button onClick={ondelete}>ลบ</Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Button sx={{ my: 3 }}>
        <Link href="/dashboard/newstype/create">เพิ่มข้อมูล</Link>
      </Button>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid rows={nt} columns={columns} />
      </div>
    </>
  );
}

export default NTIndex;
