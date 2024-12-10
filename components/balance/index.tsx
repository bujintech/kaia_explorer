"use client";
import { getBalance } from "@/lib/rpcApi";
import { useEffect, useState } from "react";
import { hexToDecimal } from "@/lib/utils";
export default function Balance({ address }: { address: string }) {
  const [value, setValue] = useState<undefined | number>();
  useEffect(() => {
    if (address) {
      getBalance({ params: [address, "latest"] }).then((res) => {
        setValue(hexToDecimal(res.result as string));
      });
    }
  }, [address]);

  if (typeof value === "undefined") {
    return "";
  }
  if (value === 0) {
    return "0 KAIA";
  }

  return `${value / 1000000000000000000} KAIA`;
}
