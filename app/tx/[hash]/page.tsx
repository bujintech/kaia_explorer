import { queryTransactionByHash } from "@/lib/dbApi";
import Empty from "@/components/empty";
import TxDetail from "@/components/txDetail";
import style from "./index.module.css";

async function TransactionDetail({ params: { hash } }: { params: { hash: string } }) {
  const data = await queryTransactionByHash(hash);

  if (!data) return <Empty></Empty>;

  return (
    <div className={style.txDetailPage}>
      <TxDetail data={data}></TxDetail>
    </div>
  );
}

export default TransactionDetail;
