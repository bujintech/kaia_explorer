import { queryTransactionByHash } from "@/lib/dbApi";
import Empty from "@/components/empty";
import style from "./index.module.css";

async function TransactionDetail({ params: { hash } }: { params: { hash: string } }) {
  const data = await queryTransactionByHash(hash);

  if (!data) return <Empty></Empty>;

  return (
    <div className={style.txDetailPage}>
      <div className={style.title}>TRANSACTIONS</div>

      <div className={`${style.detail} ${style.card}`}>
        <div>
          <span>TXN Hash</span>
          <span>{data.hash}</span>
        </div>
        <div>
          <span>Block</span>
          <span>{data.blockNumber}</span>
        </div>
        <div>
          <span>From-To</span>
          <span>{data.from}</span>
        </div>
        <div>
          <span>Age</span>
          <span>{data.timestamp}</span>
        </div>
        <div>
          <span>Amount</span>
          <span>{data.gas}</span>
        </div>
        <div>
          <span>TXN Fee</span>
          <span>{data.gasPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetail;
