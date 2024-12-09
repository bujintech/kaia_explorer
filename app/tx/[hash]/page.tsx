import { queryTransactionByHash, queryTransfersByTxHash } from "@/lib/dbApi";
import Empty from "@/components/empty";
import TxDetail from "@/components/txDetail";
import style from "./index.module.css";

async function TxDetailPage({ params: { hash } }: { params: { hash: string } }) {
  const data = await queryTransactionByHash(hash);
  const transfers = await queryTransfersByTxHash(hash);
  return (
    <div className={style.txDetailPage}>{data ? <TxDetail data={data} transfers={transfers ?? []}></TxDetail> : <Empty></Empty>}</div>
  );
}

export default TxDetailPage;
