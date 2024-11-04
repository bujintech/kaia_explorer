import style from "./index.module.css";

function Welcome() {
  return (
    <div className={style.welcome}>
      Welcome to the kaia blockchain explorer
      <img src="/images/welcome.png"></img>
    </div>
  );
}

export default Welcome;
