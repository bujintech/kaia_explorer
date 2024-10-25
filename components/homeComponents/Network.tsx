import style from "./index.module.css";

function Network() {
  return (
    <div className={style.network}>
      <div>Network</div>
      <div>
        <div className={style.item}>
          <span>consensus nodes</span>
          <span>46</span>
        </div>
        <div className={style.item}>
          <span>
            Avg Block Time<i>(1h)</i>
          </span>
          <span>1s</span>
        </div>
        <div className={style.item}>
          <span>
            Avg Block Time<i>(24h)</i>
          </span>
          <span>1s</span>
        </div>
        <div className={style.item}>
          <span>
            Avg TX Per Block<i>(24h)</i>
          </span>
          <span>13</span>
        </div>
      </div>
    </div>
  );
}

export default Network;
