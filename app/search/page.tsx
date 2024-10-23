import Empty from "@/components/empty";
import { queryGcConfig, queryListFromBatch } from "@/lib/db";
import { GcResponseData } from "@/lib/db/type";

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
      return <div key={v.name}>{v.name}</div>;
    });
  } else {
    return <Empty type="search"></Empty>;
  }
}

export default Search;
