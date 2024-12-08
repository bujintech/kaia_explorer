"use client";
import { getBalance } from "@/lib/rpcApi";
import { useEffect, useState } from "react";
export default function Balance({ address }: { address: string }) {
  const [value, setValue] = useState<undefined | number>();
  useEffect(() => {
    getBalance({ params: [address, "latest"] }).then((res) => {
      setValue(Number(res.result));
    });
  }, []);
  return typeof value === "undefined" ? "--" : value;
}
