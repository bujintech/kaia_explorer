"use client";

import axios from "axios";
import Table, { blockColumns_home } from "@/components/table";
import useTable from "@/hooks/useTable";
import Link from "next/link";
import style from "./index.module.css";

function TableList() {
  const { dataSource } = useTable({
    apiFunction: () =>
      axios.post(`/api/block/list`, {
        data: {
          startWith: 166887916,
        },
      }),
  });

  return (
    <div className={style.tableList}>
      <div>
        <div className={style.title}>
          <Link href="/blocks">RECENT BLOCK</Link>
        </div>
        <Table columns={blockColumns_home} dataSource={dataSource}></Table>
      </div>
      <div>
        <div className={style.title}>
          <Link href="/blocks">RECENT TRANSACTIONS</Link>
        </div>
        <Table columns={blockColumns_home} dataSource={dataSource}></Table>
      </div>
    </div>
  );
}

export default TableList;
