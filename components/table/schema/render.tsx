import { formatHash, hexToDecimal, dayjs } from "@/lib/utils";
import Link from "next/link";

export function renderHash(hash: string, stay?: boolean) {
  if (stay) {
    return formatHash(hash);
  }
  return <Link href={`/hash/${hash}`}>{formatHash(hash)}</Link>;
}

export function renderAddress(hash: string, stay?: boolean) {
  if (stay) {
    return formatHash(hash);
  }
  return <Link href={`/address/${hash}`}>{formatHash(hash)}</Link>;
}

export function renderBlock(blockNumber: string, stay?: boolean) {
  const _blockNumber = hexToDecimal(blockNumber);
  if (stay) {
    return _blockNumber;
  }
  return <Link href={`/block/${_blockNumber}`}>{_blockNumber}</Link>;
}

export function renderAge(timestamp: string) {
  return dayjs(Number(timestamp) * 1000).fromNow();
}
