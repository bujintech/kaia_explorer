import HomeInfo from "@/components/homeComponents/HomeInfo";
import Message from "@/components/homeComponents/Message";
import TableList from "@/components/homeComponents/TableList";
import GcList from "@/components/homeComponents/GcList";

import { queryGcInfoList, queryBlockList, queryTxList, queryMaxBlockNumber } from "@/lib/dbApi";

import style from "./index.module.css";
export default async function Home() {
  const blockHeight = await queryMaxBlockNumber();
  const blocks = await queryBlockList(blockHeight, 10);
  const txs = await queryTxList(blockHeight);

  if (txs.list.length > 10) txs.list.length = 10;

  const gcList = await queryGcInfoList();
  return (
    <div className={style.homePage}>
      <div className={style.top}>
        <HomeInfo></HomeInfo>
        <Message blockHeight={blockHeight}></Message>
      </div>
      <TableList blocks={blocks.list} txs={txs.list}></TableList>
      <GcList data={gcList}></GcList>
    </div>
  );
}
