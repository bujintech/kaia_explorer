import type { Columns } from "@/components/table";
import type { BlockResponseData } from "@/lib/dbApi/type";
import style from "../index.module.css";
import { Age, Block, BlockProposer } from "@/components/map";

const columns: Columns<BlockResponseData>[] = [
  {
    title: (
      <div className={style.mb_th}>
        <div>Block#</div>
        <div>Age</div>
      </div>
    ),
    dataIndex: "number",
    render: ({ number, timestamp }) => {
      return (
        <div className={style.mb_td}>
          <div>
            <Block blockNumber={number}></Block>
          </div>
          <div>
            <Age timestamp={timestamp}></Age> ago
          </div>
        </div>
      );
    },
  },
  {
    title: (
      <div className={style.mb_th} style={{ textAlign: "right" }}>
        <div>Block Proposer</div>
        <div>Total Txs</div>
      </div>
    ),
    dataIndex: "number",
    render: ({ miner, transactionsTotal }) => {
      return (
        <div className={style.mb_td} style={{ textAlign: "right" }}>
          <div>
            <BlockProposer miner={miner}></BlockProposer>
          </div>

          <div>{transactionsTotal} txns</div>
        </div>
      );
    },
  },
];

export default columns;
