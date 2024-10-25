import Link from "next/link";
import style from "./index.module.css";

function GcList() {
  return (
    <div className={style.gcList}>
      <div className="flex">
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
      </div>
      <div className="flex">
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
      </div>
      <div className={style.more}>
        <Link href="/gcInfo">LEARN MORE</Link>
      </div>
    </div>
  );
}

export default GcList;
