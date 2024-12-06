import type { GcResponseData, TransferResponseData, TxResponseData } from "@/lib/dbApi/type";
import Table, { addressColumns } from "@/components/table";
import { queryGcConfig, queryTransactionsByAddress, queryGcInfoByName, queryTransfersByFromOrTo } from "@/lib/dbApi";
import GcAddress from "./Address";
import style from "./index.module.css";
import TabbedTable, { TabProps } from "@/components/tabbedTable";
import { nftTransferColumns, tokenTransferColumns } from "@/components/table/schema/transfers";

async function Address({ params: { address } }: { params: { address: string } }) {
  const gc_config = await queryGcConfig();

  const txs = await queryTransactionsByAddress(address);

  const gcName = gc_config && gc_config[address];

  let gcData = null;
  if (gcName) {
    gcData = (await queryGcInfoByName(gcName)) as GcResponseData;
  }


  // console.log("transfers", transfers);

  const txTab: TabProps<TxResponseData> = {
    data: txs,
    title: "Transactions",
    key: "tx",
    columns: addressColumns.map(v => ({ ...v, render: undefined }))
  }

  const transfers = await queryTransfersByFromOrTo(address);

  const tokenTransfers: TabProps<TransferResponseData> = {
    data: transfers?.filter(v => v.type === "token") ?? [],
    title: "Token Transfers",
    key: "token",
    columns: tokenTransferColumns,
  }

  const nftTransfers: TabProps<TransferResponseData> = {
    data: transfers?.filter(v => v.type === "nft") ?? [],
    title: "NFT Transfers",
    key: "nft",
    columns: nftTransferColumns,
  }

  return (
    <div className={style.addressPage}>
      {gcName && gcData ? (
        <div className={style.gcTitle}>
          <img src={gcData.thumbnail}></img>
          <div>{gcData.name}</div>
        </div>
      ) : (
        <div className={style.title}>Address</div>
      )}

      <div className={`${style.detail} ${style.card}`}>
        <div style={{ display: `${gcName && gcData ? "flex" : "none"}` }}>
          <span>Label</span>
          <span>{gcData?.name}</span>
        </div>

        <GcAddress gcData={gcData} address={address}></GcAddress>

        <div>
          <span>Balance</span>
          <span>111</span>
        </div>

        <div>
          <span>Total TXs</span>
          <span>{(txs || []).length}</span>
        </div>
      </div>
      <div className={`${style.card}`}>
        {/* @ts-ignore */}
        <TabbedTable tabs={[txTab, tokenTransfers, nftTransfers]}></TabbedTable>
        {/* <Table<TxResponseData> columns={addressColumns} dataSource={txs || []}></Table> */}
      </div>
    </div>
  );
}

export default Address;

export const revalidate = 1000;
