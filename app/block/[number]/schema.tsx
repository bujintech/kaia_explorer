import type { Columns } from "@/components/table";
import Link from "next/link";

export interface DataType {
  txHash: string;
  blockNumber: string;
  createdAt: string;
  from: string;
  to: string;
  methodName: string;
  txType: string;
  value: string;
  txFee: string;
}

export const columns: Columns<DataType>[] = [
  {
    title: "TX Hash",
    dataIndex: "txHash",
    render: ({ txHash }) => <Link href={`/tx/${txHash}`}>{txHash}</Link>,
  },
  {
    title: "Block",
    dataIndex: "blockNumber",
  },
  { title: "Age", dataIndex: "createdAt" },
  { title: "From", dataIndex: "from" },
  { title: "To", dataIndex: "to" },
  { title: "Method", dataIndex: "methodName" },
  { title: "TX Type", dataIndex: "txType" },
  { title: "Amount(KLAY)", dataIndex: "value" },
  { title: "TX Fee(KLAY)", dataIndex: "txFee" },
];
