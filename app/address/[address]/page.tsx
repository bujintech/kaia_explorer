import type { GcResponseData } from "@/lib/dbApi/type";
import { addressColumns } from "@/components/table";
import Balance from "@/components/balance";
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

  const txTab: TabProps = {
    data: txs as unknown as Record<string, unknown>[],
    title: "Transactions",
    key: "tx",
    columns: addressColumns.map(v => ({ ...v, render: undefined })),
  }

  const transfers = await queryTransfersByFromOrTo(address);

  const tokenTransfers: TabProps = {
    data: transfers?.filter(v => v.type === "token") as unknown as Record<string, unknown>[],
    title: "Token Transfers",
    key: "token",
    columns: tokenTransferColumns.map(v => ({ ...v })),
  }

  const nftTransfers: TabProps = {
    data: transfers?.filter(v => v.type === "nft") as unknown as Record<string, unknown>[],
    title: "NFT Transfers",
    key: "nft",
    columns: nftTransferColumns.map(v => ({ ...v })),
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
          <span>
            <Balance address={address}></Balance>
          </span>
        </div>

        <div>
          <span>Total TXs</span>
          <span>{(txs || []).length}</span>
        </div>
      </div>
      <div className={`${style.card}`}>
        <TabbedTable tabs={[txTab, tokenTransfers, nftTransfers]}></TabbedTable>
        {/* <Table<TxResponseData> columns={addressColumns} dataSource={txs || []}></Table> */}
      </div>
    </div>
  );
}

export default Address;

export const revalidate = 1000;
