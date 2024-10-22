import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/db/type";
import Link from "next/link";

export const columns: Columns<TxResponseData>[] = [
  {
    title: "TX Hash",
    dataIndex: "hash",
    render: ({ hash }) => <Link href={`/tx/${hash}`}>{hash}</Link>,
  },
  {
    title: "Block",
    dataIndex: "blockNumber",
  },
  { title: "Age", dataIndex: "timestamp" },
  { title: "From", dataIndex: "from" },
  { title: "To", dataIndex: "to" },
  { title: "Method", dataIndex: "blockNumber" },
  { title: "TX Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "blockNumber" },
  { title: "TX Fee(KLAY)", dataIndex: "blockNumber" },
];
