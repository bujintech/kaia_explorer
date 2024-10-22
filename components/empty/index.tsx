import style from "./index.module.css";

function Empty({ type }: { type?: "block" | "tx" | "hash" | "search" }) {
  return <div className={style.empty}>当前空的类型是：{type}</div>;
}

export default Empty;
