"use client";

import axios from "axios";
import Table from "@/components/table";
import useTable from "@/hooks/useTable";
import { columns } from "./schema";

function Transactions() {
  const { dataSource } = useTable({
    apiFunction: () =>
      axios.post(`/api/transaction/list`, {
        data: {
          startWith: 166887911,
        },
      }),
  });

  return (
    <>
      <h1>transactions list</h1>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
}

export default Transactions;
