import Welcome from "./Welcome";
import Place from "./Place";
import style from "./index.module.css";

function HomeInfo() {
  return (
    <div className={`${style.homeInfo} flex fl_jb`}>
      <Welcome></Welcome>
      <div id="homePageSearchSolt"></div>
      <Place></Place>
    </div>
  );
}

export default HomeInfo;
