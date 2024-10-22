"use client";

import axios from "axios";
import Table, { txsColumns } from "@/components/table";
import useTable from "@/hooks/useTable";

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
      <Table columns={txsColumns} dataSource={dataSource}></Table>
    </>
  );
}

export default Transactions;
