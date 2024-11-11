import { formatHash, hexToDecimal, dayjs } from "@/lib/utils";
import Link from "next/link";
import { useGlobalData } from "@/components/layout/context";

interface Options {
  className?: string;
  stay?: boolean;
}

export function renderHash(hash: string, options?: Options) {
  if (options?.stay) {
    return formatHash(hash);
  }
  return (
    <Link className={options?.className} href={`/hash/${hash}`}>
      {formatHash(hash)}
    </Link>
  );
}

export function renderAddress(hash: string, options?: Options) {
  if (options?.stay) {
    return formatHash(hash);
  }
  return (
    <Link className={options?.className} href={`/address/${hash}`}>
      {formatHash(hash)}
    </Link>
  );
}

export function renderBlock(blockNumber: string, options?: Options) {
  const _blockNumber = hexToDecimal(blockNumber);
  if (options?.stay) {
    return _blockNumber;
  }
  return (
    <Link className={options?.className} href={`/block/${_blockNumber}`}>
      {_blockNumber}
    </Link>
  );
}

export function renderAge(timestamp: string) {
  const age = dayjs(Number(timestamp) * 1000).fromNow(true);
  return age
    .replace("minutes", "m")
    .replace("seconds", "s")
    .replace("hours", "h")
    .replace("days", "d")
    .replace("months", "M")
    .replace("years", "Y")
    .replace("an", "1")
    .replace("a", "1")
    .replace(/\s+/g, "");
}

export function BlockProposer({ miner }: { miner: string }) {
  const { gcConfig } = useGlobalData();
  return <>{gcConfig?.[miner] || "--"}</>;
}

export function Method({ input }: { input: string }) {
  const startKey = input.substring(0, 10);
  const { methodConfig } = useGlobalData();

  const method = methodConfig?.[startKey];

  if (method) {
    return method.split("(")[0];
  }

  return startKey;
}
