import { queryBlockByNumber, queryBlockByHash } from "@/lib/dbApi";
import { isHash, hexToDecimal } from "@/lib/utils";
import Empty from "@/components/empty";
import BlockDetail from "@/components/blockDetail";
import style from "./index.module.css";

async function BlockDetailPage({ params: { params } }: { params: { params: string } }) {
  let data = null;
  if (isHash(params)) {
    data = await queryBlockByHash(params);
  } else {
    data = await queryBlockByNumber(hexToDecimal(params));
  }

  return (
    <div className={style.txDetailPage}>
      {data ? <BlockDetail data={data}></BlockDetail> : <Empty></Empty>}
    </div>
  );
}

export default BlockDetailPage;
