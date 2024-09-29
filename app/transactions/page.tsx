"use client";

import { useRouter } from "next/navigation";
import TransactionsList from "@/components/transactionList";
import { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [dataSource, setDataSource] = useState([]);
  const router = useRouter();

  const onBlockDetail = () => {
    router.push("/block/55");
  };

  const initData = async () => {
    const { data } = await axios.post("/api/transaction/list/1");
    setDataSource(data.result);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      <h1 onClick={onBlockDetail}>transactions list</h1>
      <TransactionsList dataSource={dataSource}></TransactionsList>
    </>
  );
};

export default Transactions;
