import style from "./index.module.css";

function Kaia() {
  return (
    <div className={style.kaia}>
      <div>KLAY</div>
      <div>
        <div className={style.item}>
          <p>
            Price<i></i>
          </p>
          <p>$1231</p>
        </div>
        <div className={style.item}>
          <p>
            Volume<i>(24)</i>
          </p>
          <p>$123</p>
        </div>
        <div className={style.item}>
          <p>
            Ciculating<i>(Klay)</i>
          </p>
          <p>234234</p>
        </div>
        <div className={style.item}>
          <p>
            Market Cap<i></i>
          </p>
          <p>$231231</p>
        </div>
      </div>
    </div>
  );
}

export default Kaia;
