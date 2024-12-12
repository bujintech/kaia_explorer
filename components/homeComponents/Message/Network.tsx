import style from "./index.module.css";

function Network() {
  return (
    <div className={style.network}>
      <div>Network</div>
      <div>
        <div className={style.item}>
          <span>Consensus nodes</span>
          <span>45</span>
        </div>
        <div className={style.item}>
          <span>
            Avg Block Time<i>(1h)</i>
          </span>
          <span>1.0s</span>
        </div>
        <div className={style.item}>
          <span>
            Avg Block Time<i>(24h)</i>
          </span>
          <span>1.0s</span>
        </div>
        <div className={style.item}>
          <span>
            Avg TX Per Block<i></i>
          </span>
          <span>6.0</span>
        </div>
      </div>
    </div>
  );
}

export default Network;
