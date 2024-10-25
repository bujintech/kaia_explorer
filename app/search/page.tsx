import Empty from "@/components/empty";
import Search from "@/components/search";
import { queryGcConfig, queryListFromBatch } from "@/lib/db";
import type { GcResponseData } from "@/lib/db/type";
import style from "./index.module.css";

function renderMatchText(str: string, matchChar: string) {
  return str.replace(new RegExp(`(${matchChar})`, "gi"), `<span style="color:red">$1</span>`);
}

function renderContent(list: GcResponseData[], keyword: string) {
  return (
    <>
      <h4>address for GC</h4>
      {list?.map((v) => {
        return (
          <div key={v.name} style={{ display: "flex" }}>
            <div
              style={{ width: 240 }}
              dangerouslySetInnerHTML={{ __html: renderMatchText(v.name, keyword) }}
            ></div>
            <div>
              {v.contracts.map(({ address }) => (
                <p key={address}>{address}</p>
              ))}
            </div>
          </div>
        );
      })}
      <h4>address for Token</h4>
      <span> todo...</span>
    </>
  );
}

async function SearchPage({ searchParams: { keyword = "" } }: { searchParams: { keyword: string } }) {
  const _keyword = (decodeURIComponent(keyword) || "").trim().toLocaleLowerCase();

  const gc_config = await queryGcConfig();

  const values = Array.from(
    new Set(
      ((gc_config && Object.values(gc_config)) || []).filter((v) => {
        return v.includes(_keyword);
      })
    )
  );

  let searchData: GcResponseData[] = [];

  if (values.length > 0) {
    searchData = (await queryListFromBatch(values.map((v) => ({ PK: "GC", SK: v })))) as GcResponseData[];
  }

  return (
    <div className={style.searchPage}>
      {searchData.length === 0 ? <Empty></Empty> : renderContent(searchData, _keyword)}
    </div>
  );
}

export default SearchPage;
