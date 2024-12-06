import { TransferResponseData } from "@/lib/dbApi/type";
import type { Columns } from "@/components/table";

const basicColumns: Omit<Columns<TransferResponseData>, "render">[] = [
    {
        dataIndex: "tokenContract",
        title: "Contract",
    },
    {
        dataIndex: "txHash",
        title: "Tx Hash",
    },
    {
        dataIndex: "tokenName",
        title: "Name",
    },
    {
        dataIndex: "from",
        title: "From",
    },
    {
        dataIndex: "to",
        title: "To",
    },
    {
        dataIndex: "amount",
        title: "Amount",
    }
]

export const tokenTransferColumns: Omit<Columns<TransferResponseData>, "render">[] = [
    ...basicColumns,
];

export const nftTransferColumns: Omit<Columns<TransferResponseData>, "render">[] = [
    ...basicColumns,
    {
        dataIndex: "nftId",
        title: "NFT ID",
    }
];
