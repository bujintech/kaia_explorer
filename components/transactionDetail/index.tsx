import style from "./index.module.css";
import type { TxResponseData } from "@/lib/db/type";

function TransactionDetail({ data }: { data: TxResponseData }) {
  return (
    <div className={style.txDetail}>
      TX
      <div>
        <span>Tx Type:</span>
        <span>{data.type}</span>
      </div>
      <div>
        <span>Block:</span>
        <span>{data.blockNumber}</span>
      </div>
      <div>
        <span>From:</span>
        <span>{data.from}</span>
      </div>
      <div>
        <span>To:</span>
        <span>{data.to}</span>
      </div>
      <div>
        <span>Time:</span>
        <span>{data.timestamp}</span>
      </div>
      <div>
        <span>Nonce:</span>
        <span>{data.nonce}</span>
      </div>
      <div>
        <span>Gas Price:</span>
        <span>{data.gasPrice}</span>
      </div>
    </div>
  );
}

export default TransactionDetail;
