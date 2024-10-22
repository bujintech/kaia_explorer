"use client";

import axios from "axios";
import Table from "@/components/table";
import useTable from "@/hooks/useTable";
import { columns } from "./schema";

function Blocks() {
  const { dataSource, loading } = useTable({
    apiFunction: () =>
      axios.post(`/api/block/list`, {
        data: {
          startWith: 166887916,
        },
      }),
  });

  return (
    <>
      <h1 style={{ color: loading ? "red" : "blue" }}>Blocks list</h1>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
}

export default Blocks;
