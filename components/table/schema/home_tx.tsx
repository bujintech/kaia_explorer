import Link from "next/link";
import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import { dayjs } from "@/lib/utils";

const columns: Columns<TxResponseData>[] = [
  {
    title: "Block",
    dataIndex: "blockNumber",
    render: ({ blockNumber }) => {
      const _blockNumber = parseInt(blockNumber, 16).toString();
      return <Link href={`/block/${blockNumber}`}>{_blockNumber}</Link>;
    },
  },
  {
    title: "Age",
    dataIndex: "timestamp",
    render: ({ timestamp }) => dayjs(Number(timestamp) * 1000).fromNow(),
  },
  { title: "From", dataIndex: "from" },
  { title: "To", dataIndex: "to" },
];

export default columns;
