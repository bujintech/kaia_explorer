import type { Columns } from "@/components/table";
import Link from "next/link";
import { dayjs } from "@/lib/utils";
import type { TxResponseData } from "@/lib/db/type";

const columns: Columns<TxResponseData>[] = [
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
    render: ({ timestamp }) => dayjs(Number(timestamp) * 1000).fromNow(),
  },
  { title: "From", dataIndex: "from", render: ({ from }) => <Link href={`/address/${from}`}>{from}</Link> },
  { title: "To", dataIndex: "to", render: ({ to }) => <Link href={`/address/${to}`}>{to}</Link> },
  { title: "Method", dataIndex: "blockNumber" },
  { title: "Tx Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "blockNumber" },
  { title: "TX Fee(KLAY)", dataIndex: "blockNumber" },
];

export default columns;
