"use client";

import axios from "axios";
import Table from "@/components/table";
import Pagination from "@/components/pagination";
import useTable from "@/hooks/useTable";
import { columns } from "./schema";

const Transactions = () => {
  const { dataSource, pageSize, pageNumber, total, setPageSize } = useTable({
    apiFunction: (pageSize: number) => axios.post(`/api/transaction/list/${pageSize}`),
  });

  return (
    <>
      <h1>transactions list</h1>
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

export default Transactions;
