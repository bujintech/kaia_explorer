import Table, { blockDetailColumns } from "../table";
import { queryTransactionsByBlockNumber } from "@/lib/dbApi";
import { hexToDecimal } from "@/lib/utils";
import style from "./index.module.css";

import type { BlockResponseData, TxResponseData } from "@/lib/dbApi/type";

async function BlockDetail({ data }: { data: BlockResponseData }) {
  const blockNumber = hexToDecimal(data.number);

  const txList = await queryTransactionsByBlockNumber(blockNumber);

  return (
    <>
      <div className={style.title}>
        BLOCK <span>{blockNumber}</span>
      </div>

      <div className={`${style.detail} ${style.card}`}>
        <div>
          <span>Age</span>
          <span>{data.timestamp}</span>
        </div>
        <div>
          <span>Hash</span>
          <span>{data.hash}</span>
        </div>
        <div>
          <span>Parent Hash</span>
          <span>{data.parentHash}</span>
        </div>

        <div>
          <span>Total TXs</span>
          <span>{data.transactionsTotal}</span>
        </div>
        <div>
          <span>Block Proposer</span>
          <span>{data.miner}</span>
        </div>
        <div>
          <span>Gas Limit</span>
          <span>{data.gasLimit}</span>
        </div>
        <div>
          <span>Gas Fee</span>
          <span>{data.gasUsed}</span>
        </div>
        <div>
          <span>Burnt Fee</span>
          <span>{data.gasUsed}</span>
        </div>
        <div>
          <span>Block Rewards</span>
          <span>{data.gasUsed}</span>
        </div>
        <div>
          <span>Validators</span>
          <span>{data.gasUsed}</span>
        </div>
      </div>

      <div className={`${style.card}`}>
        <Table<TxResponseData> columns={blockDetailColumns} dataSource={txList || []}></Table>
      </div>
    </>
  );
}

export default BlockDetail;
