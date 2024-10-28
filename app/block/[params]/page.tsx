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

  if (!data) return <Empty></Empty>;

  return (
    <div className={style.blockDetailPage}>
      <BlockDetail data={data}></BlockDetail>
    </div>
  );
}

export default BlockDetailPage;
