import { queryBlockByNumber, queryBlockByHash } from "@/lib/db";
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

  return (
    <div className={style.blockDetailPage}>
      <div className={style.title}>BLOCK</div>

      <div className={`${style.detail} ${style.card}`}>
        <div className="flex fl_ac">
          <span>Age</span>
          <span>{data.timestamp}</span>
        </div>
        <div className="flex fl_ac">
          <span>Hash</span>
          <span>{data.hash}</span>
        </div>
        <div className="flex fl_ac">
          <span>Parent Hash</span>
          <span>{data.parentHash}</span>
        </div>

        <div className="flex fl_ac">
          <span>Total TXs</span>
          <span>{data.transactionsTotal}</span>
        </div>
        <div className="flex fl_ac">
          <span>Block Proposer</span>
          <span>{data.miner}</span>
        </div>
        <div className="flex fl_ac">
          <span>Gas Limit</span>
          <span>{data.gasLimit}</span>
        </div>
        <div className="flex fl_ac">
          <span>Gas Fee</span>
          <span>{data.gasUsed}</span>
        </div>
        <div className="flex fl_ac">
          <span>Burnt Fee</span>
          <span>{data.gasUsed}</span>
        </div>
        <div className="flex fl_ac">
          <span>Block Rewards</span>
          <span>{data.gasUsed}</span>
        </div>
        <div className="flex fl_ac">
          <span>Validators</span>
          <span>{data.gasUsed}</span>
        </div>
      </div>
    </div>
  );
}

export default BlockDetail;
