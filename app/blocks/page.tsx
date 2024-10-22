"use client";

import axios from "axios";
import Table, { blockColumns } from "@/components/table";
import useTable from "@/hooks/useTable";

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
      <Table columns={blockColumns} dataSource={dataSource}></Table>
    </>
  );
}

export default Blocks;
