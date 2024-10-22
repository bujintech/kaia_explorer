import Table, { blockDetailColumns } from "@/components/table";
import style from "./index.module.css";
import { hexToDecimal } from "@/lib/utils";
import { queryTransactionsByBlockNumber } from "@/lib/db";
import type { BlockResponseData, TxResponseData } from "@/lib/db/type";

async function BlockDetail({ data }: { data: BlockResponseData }) {
  const blockNumber = hexToDecimal(data.number);

  const txList = await queryTransactionsByBlockNumber(blockNumber);

  return (
    <div className={style.blockDetail}>
      BLOCK _ {blockNumber}
      <div>
        <span>Block:</span>
        <span>{data.number}</span>
      </div>
      <div>
        <span>Time:</span>
        <span>{data.timestamp}</span>
      </div>
      <div>
        <span>Hash:</span>
        <span>{data.hash}</span>
      </div>
      <div>
        <span>parentHash:</span>
        <span>{data.parentHash}</span>
      </div>
      <div>
        <span>Total TXS:</span>
        <span>{data.transactionsTotal}</span>
      </div>
      <Table<TxResponseData> columns={blockDetailColumns} dataSource={txList || []}></Table>
    </div>
  );
}

export default BlockDetail;
