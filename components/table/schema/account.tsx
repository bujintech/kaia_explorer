import { Address } from "@/components/map";
import type { Columns } from "@/components/table";

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
    render: ({ address }) => <Address address={address}></Address>,
  },
  {
    title: "Type",
    dataIndex: "type",
  },
];

export default columns;
