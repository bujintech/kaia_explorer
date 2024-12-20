import { queryGcInfo, queryGcInfoList } from "@/lib/dbApi";
import { formatNumber } from "@/lib/utils";
import style from "./index.module.css";

async function GCInfo() {
  const data = await queryGcInfoList();
  const gcInfo = await queryGcInfo();

  console.log(gcInfo);

  return (
    <div className={style.gcPage}>
      <div className={style.title}>
        <span>GC Information</span>
      </div>

      <div className={style.gcContainer}>
        {data.filter(item => gcInfo[item.name]).map((item, i) => {
          return (
            <div key={i} className={style.itemwrap}>
              <div className={style.iteminner}>
                <div className={style.info}>
                  <img src={item.thumbnail}></img>
                  <div>{item.name}</div>
                </div>

                <div className={style.countMsg}>
                  <span>Total Staking</span>
                  <span>APY</span>
                </div>

                <div
                  className={style.countMsg}
                  style={{ fontWeight: "bold", borderTop: "1px solid #3d4049" }}
                >
                  <span>{formatNumber(gcInfo[item.name]?.amount || "0")} KAIA</span>
                  <span>{item.apy || "0"}%</span>
                </div>

                <div className={style.des}>
                  <div>{item.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GCInfo;

export const revalidate = 100;
