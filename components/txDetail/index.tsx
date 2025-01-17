import style from "./index.module.css";
import { Age, Block, Method, TxType } from "../map";
import { hexToDecimal } from "@/lib/utils";
import FromTo from "./FromTo";
import Copy from "../copy";

import type { TransferResponseData, TxResponseData } from "@/lib/dbApi/type";
import TabbedTable from "../tabbedTable";
import { nftTransferColumns, tokenTransferColumns } from "../table/schema/transfers";

function TransactionDetail({ data, transfers }: { data: TxResponseData, transfers: TransferResponseData[] }) {
  return (
    <>
      <div className={style.title}>TRANSACTION DETAILS</div>

      <div className={`${style.detail} ${style.card}`}>
        <div>
          <span>TXN Hash</span>
          <span>
            {data.hash}
            <Copy className={style.copyBtn} text={data.hash}></Copy>
          </span>
        </div>
        <div>
          <span>Block</span>
          <span>
            <Block className="color_primary weight" blockNumber={data.blockNumber}></Block>
          </span>
        </div>
        <div>
          <span>Block Hash</span>
          <span>
            {data.blockHash}
            <Copy className={style.copyBtn} text={data.hash}></Copy>
          </span>
        </div>
        <FromTo from={data.from} to={data.to}></FromTo>
        <div>
          <span>Time</span>
          <span>
            <Age timestamp={data.timestamp}></Age>
          </span>
        </div>
        <div>
          <span>TX Type</span>
          <span>
            <TxType type={data.type}></TxType>
          </span>
        </div>
        <div>
          <span>Nonce</span>
          <span>{hexToDecimal(data.nonce)}</span>
        </div>
        <div>
          <span>Amount</span>
          <span>{hexToDecimal(data.value) / 1000000000000000000} KAIA</span>
        </div>
        <div>
          <span>Gas Limit</span>
          <span>{hexToDecimal(data.gas)}</span>
        </div>
        <div>
          <span>Gas Price</span>
          <span>{hexToDecimal(data.gasPrice) / 1000000000} GWei</span>
        </div>

        <div>
          <span>Method ID</span>
          <span>
            <Method input={data.input}></Method>
          </span>
        </div>
        <div>
          <span>Method Sig</span>
          <span>
            <Method input={data.input} noFormat></Method>
          </span>
        </div>
      </div>

      <div className={`${style.card}`}>
        <TabbedTable tabs={[
          {
            title: "Token Transfers",
            key: "token",
            data: transfers.filter(v => v.type === "token") as unknown as Record<string, unknown>[],
            columns: tokenTransferColumns.map(v => ({ ...v }))
          },
          {
            title: "NFT Transfers",
            key: "nft",
            data: transfers.filter(v => v.type === "nft") as unknown as Record<string, unknown>[],
            columns: nftTransferColumns.map(v => ({ ...v }))
          }
        ]}
        ></TabbedTable>
      </div>
    </>
  );
}

export default TransactionDetail;
