import style from "./index.module.css";

function Network() {
  return (
    <div className={style.network}>
      <div>Network</div>
      <div>
        <div className={style.item}>
          <span>consensus nodes</span>
          <span>5</span>
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
            Avg TX Per Block<i>(24h)</i>
          </span>
          <span>5.2</span>
        </div>
      </div>
    </div>
  );
}

export default Network;
