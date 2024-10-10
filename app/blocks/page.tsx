"use client";

import axios from "axios";
import Table from "@/components/table";
import Pagination from "@/components/pagination";
import useTable from "@/hooks/useTable";
import { columns } from "./schema";

const Blocks = () => {
  const { dataSource, loading, pageSize, pageNumber, total, setPageSize } = useTable({
    apiFunction: (pageSize: number) => axios.post(`/api/block/list/${pageSize}`),
  });

  return (
    <>
      <h1 style={{ color: loading ? "red" : "blue" }}>Blocks list</h1>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Pagination
        pageSize={pageSize}
        pageNumber={pageNumber}
        total={total}
        setPageSize={setPageSize}
      ></Pagination>
    </>
  );
};

export default Blocks;
