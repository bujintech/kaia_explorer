import Image from "next/image";
import style from "./index.module.css";

type Props = {
  type?: "block" | "tx" | "hash" | "search";
};

function SearchEmpty() {
  return (
    <>
      <Image alt="empty" width={279} height={220} src="/images/empty.png"></Image>
      <div>Page Not Found</div>
      <p>The page you&apos;re trying to access doesn&apos;t exist</p>
      <p>The address might be incorrect, or the link could be broken or outdated</p>
      <p>Please search again</p>
    </>
  );
}

function Empty({ type }: Props) {
  return <div className={style.empty}>{!type && <SearchEmpty></SearchEmpty>}</div>;
}

export default Empty;
