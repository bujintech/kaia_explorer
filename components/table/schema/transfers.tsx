import { TransferResponseData } from "@/lib/dbApi/type";
import { TabbedTableColumn } from "@/components/tabbedTable";
import { RenderMethod } from "@/components/tabbedTable/types";

const basicColumns: TabbedTableColumn<TransferResponseData>[] = [
    {
        dataIndex: "tokenContract",
        title: "Contract",
        renderMethod: RenderMethod.Address
    },
    {
        dataIndex: "txHash",
        title: "Tx Hash",
        renderMethod: RenderMethod.Hash
    },
    {
        dataIndex: "tokenName",
        title: "Name",
        renderMethod: RenderMethod.Span
    },
    {
        dataIndex: "from",
        title: "From",
        renderMethod: RenderMethod.Address
    },
    {
        dataIndex: "to",
        title: "To",
        renderMethod: RenderMethod.Address
    },
    {
        dataIndex: "amount",
        title: "Amount",
        renderMethod: RenderMethod.Span
    }
];

export const tokenTransferColumns: TabbedTableColumn<TransferResponseData>[] = [
    ...basicColumns,
];

export const nftTransferColumns: TabbedTableColumn<TransferResponseData>[] = [
    ...basicColumns,
    {
        dataIndex: "nftId",
        title: "NFT ID",
        renderMethod: RenderMethod.Span
    },
    {
        dataIndex: "tokenType",
        title: "Type",
        renderMethod: RenderMethod.Span
    }
];
