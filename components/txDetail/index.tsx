import style from "./index.module.css";

import type { TxResponseData } from "@/lib/dbApi/type";

async function TransactionDetail({ data }: { data: TxResponseData }) {
  return (
    <>
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
    </>
  );
}

export default TransactionDetail;
