import Chart from "@/components/homeComponents/Chart";
import Welcome from "@/components/homeComponents/Welcome";
import BlockHeight from "@/components/homeComponents/BlockHeight";
import Place from "@/components/homeComponents/Place";
import Network from "@/components/homeComponents/Network";
import Kaia from "@/components/homeComponents/Kaia";
import TableList from "@/components/homeComponents/TableList";
import GcList from "@/components/homeComponents/GcList";

import style from "./index.module.css";
export default function Home() {
  return (
    <div className={style.homePage}>
      <div className="flex fl_jb">
        <div className="flex fl_jb" style={{ flexDirection: "column" }}>
          <Welcome></Welcome>
          <div id="homePageSearchSolt"></div>
          <Place></Place>
        </div>
        <div>
          <div className="flex">
            <Chart></Chart>
            <div className="flex fl_jb" style={{ flexDirection: "column" }}>
              <BlockHeight></BlockHeight>
              <Network></Network>
            </div>
          </div>
          <Kaia></Kaia>
        </div>
      </div>
      <TableList></TableList>
      <GcList></GcList>
    </div>
  );
}
