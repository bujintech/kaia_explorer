import type { Columns } from "@/components/table";

import Link from "next/link";

interface Account {
  name: string;
  address: string;
  type: string;
}

const columns: Columns<Account>[] = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    render: ({ address }) => {
      return <Link href={`/address/${address}`}>{address}</Link>;
    },
  },
  {
    title: "Type",
    dataIndex: "type",
  },
];

export default columns;
