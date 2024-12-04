"use client";

import { useGlobalData } from "../layout/context";

import { formatHash, hexToDecimal, dayjs } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hash({ hash, className, stay }: { hash: string; className?: string; stay?: boolean }) {
  if (stay) {
    return formatHash(hash);
  }
  return (
    <Link className={className || ""} href={`/hash/${hash}`}>
      {formatHash(hash)}
    </Link>
  );
}

export function Address({
  address,
  className,
  stay,
  noFormat,
}: {
  address: string;
  className?: string;
  stay?: boolean;
  noFormat?: boolean;
}) {
  if (stay) {
    return formatHash(address, noFormat);
  }
  return (
    <Link className={className || ""} href={`/address/${address}`}>
      {formatHash(address, noFormat)}
    </Link>
  );
}

export function Block({
  blockNumber,
  className,
  stay,
}: {
  blockNumber: string | number;
  className?: string;
  stay?: boolean;
}) {
  const _blockNumber = hexToDecimal(blockNumber);
  if (stay) {
    return _blockNumber;
  }
  return (
    <Link className={className || ""} href={`/block/${_blockNumber}`}>
      {_blockNumber}
    </Link>
  );
}

function formatAge(timestamp: string) {
  const age = dayjs(Number(timestamp) * 1000).fromNow(true);
  return (
    age
      // .replace("minutes", "m")
      // .replace("seconds", "s")
      // .replace("hours", "h")
      // .replace("days", "d")
      // .replace("month", "M")
      // .replace("year", "Y")
      .replace("an ", "1 ")
      .replace("a ", "1 ")
  );
  // .replace(/\s+/g, "")
}

export function Age({ timestamp, loop }: { timestamp: string; loop?: boolean }) {
  const [age, setAge] = useState<string>(formatAge(timestamp));

  useEffect(() => {
    if (loop) {
      const timer = setInterval(() => {
        setAge(formatAge(timestamp));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timestamp]);

  return age;
}

export function BlockProposer({ miner }: { miner: string }) {
  const { gcConfig } = useGlobalData();
  return gcConfig?.[miner] || "--";
}

export function Method({ input, noFormat }: { input: string; noFormat?: boolean }) {
  const startKey = input.substring(0, 10);
  const { methodConfig } = useGlobalData();

  const method = methodConfig?.[startKey];

  if (method) {
    return noFormat ? method : method.split("(")[0];
  }

  return startKey;
}

export function TxType({ type }: { type: string }) {
  // return type;
  return type
    .replace("TxType", "")
    .replace(/([A-Z])/g, " $1")
    .trim();
}
