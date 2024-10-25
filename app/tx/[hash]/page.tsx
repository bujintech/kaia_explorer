import { queryTransactionByHash } from "@/lib/db";
import Empty from "@/components/empty";
import style from "./index.module.css";
import type { TxResponseData } from "@/lib/db/type";

async function TransactionDetail({ params: { hash } }: { params: { hash: string } }) {
  const data = await queryTransactionByHash(hash);

  if (!data) return <Empty></Empty>;

  return (
    <div className={style.txDetailPage}>
      <div className={style.title}>TRANSACTIONS</div>

      <div className={`${style.detail} ${style.card}`}>
        <div className="flex fl_ac">
          <span>TXN Hash</span>
          <span>{data.hash}</span>
        </div>
        <div className="flex fl_ac">
          <span>Block</span>
          <span>{data.blockNumber}</span>
        </div>
        <div className="flex fl_ac">
          <span>From-To</span>
          <span>{data.from}</span>
        </div>
        <div className="flex fl_ac">
          <span>Age</span>
          <span>{data.timestamp}</span>
        </div>
        <div className="flex fl_ac">
          <span>Amount</span>
          <span>{data.gas}</span>
        </div>
        <div className="flex fl_ac">
          <span>TXN Fee</span>
          <span>{data.gasPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetail;
