"use client";

import style from "./index.module.css";

function Chart() {
  return (
    <div className={style.chart}>
      <iframe
        style={{ height: "100%", width: "100%", border: "none" }}
        src="https://dune.com/embeds/4216693/7094693/"
      />
    </div>
  );
}

export default Chart;
