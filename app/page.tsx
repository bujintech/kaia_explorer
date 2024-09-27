"use client";

import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const getData = async () => {
    const blockNumber = 111;
    const result = await axios.post("/api/getBlockByNumber", { blockNumber });

    console.log(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>11</div>;
}
