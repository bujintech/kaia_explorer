import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/db/type";
import Link from "next/link";

const columns: Columns<TxResponseData>[] = [
  {
    title: "TX Hash",
    dataIndex: "hash",
    render: ({ hash }) => <Link href={`/tx/${hash}`}>{hash}</Link>,
  },
  {
    title: "Block",
    dataIndex: "blockNumber",
    render: ({ blockNumber }) => parseInt(blockNumber, 16).toString(),
  },
  { title: "Age", dataIndex: "timestamp" },
  { title: "From", dataIndex: "from", render: ({ from }) => <Link href={`/address/${from}`}>{from}</Link> },
  { title: "To", dataIndex: "to", render: ({ to }) => <Link href={`/address/${to}`}>{to}</Link> },
  { title: "Method", dataIndex: "blockNumber" },
  { title: "TX Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "blockNumber" },
  { title: "TX Fee(KLAY)", dataIndex: "blockNumber" },
];
export default columns;
