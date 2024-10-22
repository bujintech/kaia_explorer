import type { Columns } from "@/components/table";
import Link from "next/link";

import type { TxResponseData } from "@/lib/db/type";

export const columns: Columns<TxResponseData>[] = [
  {
    title: "TX Hash",
    dataIndex: "hash",
    render: ({ hash }) => <Link href={`/tx/${hash}`}>{hash}</Link>,
  },
  {
    title: "Block",
    dataIndex: "blockNumber",
    render: ({ blockNumber }) => {
      const _blockNumber = parseInt(blockNumber, 16).toString();
      return <Link href={`/block/${_blockNumber}`}>{_blockNumber}</Link>;
    },
  },
  {
    title: "Age",
    dataIndex: "timestamp",
  },
  { title: "From", dataIndex: "from" },
  { title: "To", dataIndex: "to" },
  { title: "Method", dataIndex: "blockNumber" },
  { title: "Tx Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "blockNumber" },
  { title: "TX Fee(KLAY)", dataIndex: "blockNumber" },
];
