import Image from "next/image";
import style from "./index.module.css";

function Place() {
  return <Image className={style.place} alt="logo" width={742} height={287} src="/images/place.png"></Image>;
}

export default Place;
