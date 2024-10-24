import Search from "@/components/search";

import style from "./index.module.css";
export default function Home() {
  return (
    <div className={style.homePage}>
      <div className={style.search}>
        <Search></Search>
      </div>
    </div>
  );
}
