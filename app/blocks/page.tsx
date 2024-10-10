"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@/components/table";
import { columns } from "./schema";

const Blocks = () => {
  const [dataSource, setDataSource] = useState([]);

  const initData = async () => {
    const { data } = await axios.post("/api/block/list/1");
    setDataSource(data.result);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      <h1>Blocks list</h1>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
};

export default Blocks;
