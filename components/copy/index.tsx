"use client";

import style from "./index.module.css";

export default function Copy({ text }: { text: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("复");
    } catch (err) {
      console.log(err);
    }
  };
  return <span className={style.copy} onClick={handleCopy}></span>;
}
