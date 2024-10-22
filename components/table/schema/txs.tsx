import type { Columns } from "@/components/table";
import Link from "next/link";

export interface DataType {
  hash: string;
  blockNumber: string;
  createdAt: string;
  from: string;
  to: string;
  methodName: string;
  amount: string;
  txFee: string;
}

const columns: Columns<DataType>[] = [
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
    dataIndex: "createdAt",
  },
  { title: "From", dataIndex: "from" },
  { title: "To", dataIndex: "to" },
  { title: "Method", dataIndex: "methodName" },
  { title: "Tx Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "amount" },
  { title: "TX Fee(KLAY)", dataIndex: "txFee" },
];

export default columns;
