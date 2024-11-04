"use client";

import Table, { blockColumns_home, blockColumns_home_mobile, txColumns_home } from "@/components/table";
import type { BlockResponseData, TxResponseData } from "@/lib/dbApi/type";
import Link from "next/link";
import style from "./index.module.css";

function TableList({ blocks, txs }: { blocks: BlockResponseData[]; txs: TxResponseData[] }) {
  const isMobile = document.body.clientWidth <= 668;

  if (isMobile) {
    return (
      <div className={style.tableList}>
        <div>
          <div className={style.title}>
            <Link href="/blocks">RECENT BLOCK</Link>
          </div>
          <Table columns={blockColumns_home_mobile} dataSource={blocks}></Table>
        </div>
      </div>
    );
  }

  return (
    <div className={style.tableList}>
      <div>
        <div className={style.title}>
          <Link href="/blocks">RECENT BLOCK</Link>
        </div>
        <Table columns={blockColumns_home} dataSource={blocks}></Table>
      </div>
      <div>
        <div className={style.title}>
          <Link href="/blocks">RECENT TRANSACTIONS</Link>
        </div>
        <Table columns={txColumns_home} dataSource={txs}></Table>
      </div>
    </div>
  );
}

export default TableList;
