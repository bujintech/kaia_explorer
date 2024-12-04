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
          <span>
            {data.hash}
            <Copy text={data.hash}></Copy>
          </span>
        </div>
        <div>
          <span>Parent Hash</span>
          <span>
            <Link className="color_primary weight_5" href={`/block/${blockNumber - 1}`}>
              {data.parentHash}
            </Link>
            <Copy text={data.parentHash}></Copy>
          </span>
        </div>

        <div>
          <span>Total TXs</span>
          <span>{data.transactionsTotal}</span>
        </div>
        <div>
          <span>Block Proposer</span>
          <span className="color_primary">
            <BlockProposer miner={data.miner}></BlockProposer>
          </span>
        </div>

        <div>
          <span>Base Fee</span>
          <span>{hexToDecimal(data.baseFeePerGas) / 1000000000} GWEI</span>
        </div>
        <div>
          <span>Gas Used</span>
          <span>{hexToDecimal(data.gasUsed) / 1000000000} Billion Gas</span>
        </div>
        <div>
          <span>GAS Limit</span>
          <span>{hexToDecimal(data.gasLimit) / 1000000000} Billion Gas</span>
        </div>
        <div>
          <span>Block Size</span>
          <span>{hexToDecimal(data.size)} Bytes</span>
        </div>
        <div>
          <span>Block Rewards</span>
          <span>9.6 KAIA</span>
        </div>
        {/* <div>
          <span>Validators</span>
          <span>{data.gasUsed}</span>
        </div> */}
      </div>

      <div className={`${style.card}`}>
        <Table<TxResponseData> columns={blockDetailColumns} dataSource={txList || []}></Table>
      </div>
    </>
  );
}

export default BlockDetail;
