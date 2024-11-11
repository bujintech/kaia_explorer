import Table, { blockDetailColumns } from "../table";
import { queryTransactionsByBlockNumber } from "@/lib/dbApi";
import { hexToDecimal } from "@/lib/utils";
import style from "./index.module.css";

import type { BlockResponseData, TxResponseData } from "@/lib/dbApi/type";
import { BlockProposer, Age } from "../map";
import Copy from "../copy";
import Link from "next/link";

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
          <span>
            <Age timestamp={data.timestamp}></Age>
          </span>
        </div>
        <div>
          <span>Hash</span>
          <span>{data.hash}</span> <Copy text={data.hash}></Copy>
        </div>
        <div>
          <span>Parent Hash</span>
          <Link className="color weight" href={`/block/${blockNumber - 1}`}>
            {data.parentHash}
          </Link>
          <Copy text={data.parentHash}></Copy>
        </div>

        <div>
          <span>Total TXs</span>
          <span>{data.transactionsTotal}</span>
        </div>
        <div>
          <span>Block Proposer</span>
          <span className="color">
            <BlockProposer miner={data.miner}></BlockProposer>
          </span>
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
