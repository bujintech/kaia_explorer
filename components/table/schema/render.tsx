import { formatHash, hexToDecimal, dayjs } from "@/lib/utils";
import Link from "next/link";

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
  return dayjs(Number(timestamp) * 1000).fromNow();
}
