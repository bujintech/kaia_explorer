"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import style from "./index.module.css";

const TransactionDetail = ({ params: { hash } }: { params: { hash: string } }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>({});

  const fetchTxData = async (_hash: string) => {
    const { data } = await axios.post(`/api/transaction/${_hash}`);
    setData(data.result);
  };

  useEffect(() => {
    fetchTxData(hash);
  }, [hash]);
  return (
    <div className={style.txDetail}>
      <div>
        <span>Tx Type:</span>
        <span>{data.txType}</span>
      </div>
      <div>
        <span>Block:</span>
        <span>{data.blockNumber}</span>
      </div>
      <div>
        <span>From:</span>
        <span>{data.fromAddress}</span>
      </div>
      <div>
        <span>To:</span>
        <span>{data.toAddress}</span>
      </div>
      <div>
        <span>Time:</span>
        <span>{data.createdAt}</span>
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
};

export default TransactionDetail;
