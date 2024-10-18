"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@/components/table";
import { columns } from "./schema";
import style from "./index.module.css";

const BlockDetail = ({ params: { number } }: { params: { number: string } }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>({});

  const [txList, setTxList] = useState([]);

  const fetchBlockData = async (_number: string) => {
    const { data } = await axios.post(`/api/block/${_number}`);
    console.log(data);
    setData(data.result);
  };

  const fetchTxListData = async (_number: string) => {
    const { data } = await axios.post(`/api/block/${_number}/transaction/1`);
    console.log(data);
    setTxList(data.result);
  };

  useEffect(() => {
    fetchBlockData(number);
    fetchTxListData(number);
  }, [number]);

  return (
    <div className={style.blockDetail}>
      <div>
        <span>Block:</span>
        <span>{data.blockNumber}</span>
      </div>
      <div>
        <span>Time:</span>
        <span>{data.createdAt}</span>
      </div>
      <div>
        <span>Hash:</span>
        <span>{data.blockHash}</span>
      </div>
      <div>
        <span>parentHash:</span>
        <span>{data.parentHash}</span>
      </div>

      <div>
        <span>Total TXS:</span>
        <span>{data.txCount}</span>
      </div>
      <Table columns={columns} dataSource={txList}></Table>
    </div>
  );
};

export default BlockDetail;
