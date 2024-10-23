import Empty from "@/components/empty";
import { queryGcConfig, queryListFromBatch } from "@/lib/db";
import { GcResponseData } from "@/lib/db/type";

function renderMatchText(str: string, matchChar: string) {
  return str.replace(new RegExp(`(${matchChar})`, "gi"), `<span style="color:red">$1</span>`);
}

async function Search({ searchParams: { keyword } }: { searchParams: { keyword: string } }) {
  const _keyword = (decodeURIComponent(keyword) || "").trim().toLocaleLowerCase();

  const gc_config = await queryGcConfig();

  const values = Array.from(
    new Set(
      ((gc_config && Object.values(gc_config)) || []).filter((v) => {
        return v.includes(_keyword);
      })
    )
  );

  if (values.length > 0) {
    const params = values.map((v) => {
      return {
        PK: "GC",
        SK: v,
      };
    });

    const list = (await queryListFromBatch(params)) as GcResponseData[];

    return list?.map((v) => {
      return (
        <div key={v.name} style={{ display: "flex" }}>
          <div
            style={{ width: 240 }}
            dangerouslySetInnerHTML={{ __html: renderMatchText(v.name, _keyword) }}
          ></div>
          <div>
            {v.contracts.map(({ address }) => (
              <p key={address}>{address}</p>
            ))}
          </div>
        </div>
      );
    });
  } else {
    return <Empty type="search"></Empty>;
  }
}

export default Search;
