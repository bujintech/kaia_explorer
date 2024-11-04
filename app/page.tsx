import Chart from "@/components/homeComponents/Chart";
import Welcome from "@/components/homeComponents/Welcome";
import BlockHeight from "@/components/homeComponents/BlockHeight";
import Place from "@/components/homeComponents/Place";
import Network from "@/components/homeComponents/Network";
import Kaia from "@/components/homeComponents/Kaia";
import TableList from "@/components/homeComponents/TableList";
import GcList from "@/components/homeComponents/GcList";

import { queryGcInfoList, queryBlockList, queryTxList, queryMaxBlockNumber } from "@/lib/dbApi";

import style from "./index.module.css";
export default async function Home() {
  const blockNumbr = await queryMaxBlockNumber();
  const blocks = await queryBlockList(blockNumbr, 10);
  const txs = await queryTxList(blockNumbr);

  if (txs.list.length > 10) txs.list.length = 10;

  const gcList = await queryGcInfoList();
  return (
    <div className={style.homePage}>
      <div className="flex fl_jb">
        <div className="flex fl_jb" style={{ flexDirection: "column", paddingRight: "1%" }}>
          <Welcome></Welcome>
          <div id="homePageSearchSolt"></div>
          <Place></Place>
        </div>
        <div style={{ paddingLeft: "1%" }}>
          {/* <div className="flex">
            <Chart></Chart>
            <div className="flex fl_jb" style={{ flexDirection: "column" }}>
              <BlockHeight></BlockHeight>
              <Network></Network>
            </div>
          </div>
          <Kaia></Kaia> */}
        </div>
      </div>
      <TableList blocks={blocks.list} txs={txs.list}></TableList>
      <GcList data={gcList}></GcList>
    </div>
  );
}
