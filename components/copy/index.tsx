"use client";

import style from "./index.module.css";

export default function Copy({ text, className }: { text: string; className?: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };
  return <span className={`${style.copy} ${className || ""}`} onClick={handleCopy}></span>;
}
