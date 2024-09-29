"use client";

import { useRouter } from "next/navigation";
import BlockList from "@/components/blockList";
import { useEffect, useState } from "react";
import axios from "axios";

const Blocks = () => {
  const [dataSource, setDataSource] = useState([]);
  const router = useRouter();

  const onBlockDetail = () => {
    router.push("/block/55");
  };

  const initData = async () => {
    const { data } = await axios.post("/api/block/list/1");
    setDataSource(data.result);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      <h1 onClick={onBlockDetail}>Blocks list</h1>
      <BlockList dataSource={dataSource}></BlockList>
    </>
  );
};

export default Blocks;
