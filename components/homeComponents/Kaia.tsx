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
          <p>$0.125074</p>
        </div>
        <div className={style.item}>
          <p>
            Volume<i>(24)</i>
          </p>
          <p>$8462673</p>
        </div>
        <div className={style.item}>
          <p>
            Ciculating<i>(Klay)</i>
          </p>
          <p>5855155094</p>
        </div>
        <div className={style.item}>
          <p>
            Market Cap<i></i>
          </p>
          <p>$732327000</p>
        </div>
      </div>
    </div>
  );
}

export default Kaia;
