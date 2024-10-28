import Table, { blockDetailColumns } from "@/components/table";
import type { BlockResponseData, TxResponseData } from "@/lib/dbApi/type";

import { queryBlockByNumber, queryBlockByHash, queryTransactionsByBlockNumber } from "@/lib/dbApi";
import { isHash, hexToDecimal } from "@/lib/utils";
import Empty from "@/components/empty";
import style from "./index.module.css";

async function BlockDetail({ params: { params } }: { params: { params: string } }) {
  let data = null;
  if (isHash(params)) {
    data = await queryBlockByHash(params);
  } else {
    data = await queryBlockByNumber(hexToDecimal(params));
  }

  if (!data) return <Empty></Empty>;

  const blockNumber = hexToDecimal(data.number);

  const txList = await queryTransactionsByBlockNumber(blockNumber);

  return (
    <div className={style.blockDetailPage}>
      <div className={style.title}>BLOCK</div>

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
    </div>
  );
}

export default BlockDetail;
