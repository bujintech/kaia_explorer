import Table, { blockColumns_home, txColumns_home } from "@/components/table";
import { queryBlockList, queryTxList } from "@/lib/dbApi";
import Link from "next/link";
import style from "./index.module.css";

async function TableList() {
  const blockData = await queryBlockList(166887911);
  const txData = await queryTxList(166887911);

  if (txData.list.length > 10) txData.list.length = 10;

  return (
    <div className={style.tableList}>
      <div>
        <div className={style.title}>
          <Link href="/blocks">RECENT BLOCK</Link>
        </div>
        <Table columns={blockColumns_home} dataSource={blockData.list}></Table>
      </div>
      <div>
        <div className={style.title}>
          <Link href="/blocks">RECENT TRANSACTIONS</Link>
        </div>
        <Table columns={txColumns_home} dataSource={txData.list}></Table>
      </div>
    </div>
  );
}

export default TableList;
