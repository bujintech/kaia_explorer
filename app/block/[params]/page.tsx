import { queryBlockByNumber, queryBlockByHash, queryTransfersByBlockNumber } from "@/lib/dbApi";
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

  const transfers = await queryTransfersByBlockNumber(data ? parseInt(data.number) : undefined);

  return (
    <div className={style.blockDetailPage}>
      {data ? <BlockDetail data={data} transfers={transfers ?? []}></BlockDetail> : <Empty></Empty>}
    </div>
  );
}

export default BlockDetailPage;
