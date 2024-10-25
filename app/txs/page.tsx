"use client";

import axios from "axios";
import Table, { txsColumns } from "@/components/table";
import useTable from "@/hooks/useTable";

import style from "./index.module.css";

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
    <div className={style.txsPage}>
      <div className={style.title}>Transactions</div>
      <div className={style.tableContainer}>
        <Table columns={txsColumns} dataSource={dataSource}></Table>
      </div>
    </div>
  );
}

export default Transactions;
