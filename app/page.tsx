"use client";

import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const getData = async () => {
    // const result = await axios.post("/api/getBlockByNumber", { blockNumber });
    // const result = await axios.post("/api/transaction/list/1");
    const hash = "0x70bfe38f644fbea6794789f6e97e1f982e089fc4a2dfe6fe5082cd36d0ed8ca9";
    const result = await axios.post("/api/transaction/" + hash);
    console.log(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>11</div>;
}
