import Empty from "@/components/empty";
import { queryGcConfig, queryListFromBatch } from "@/lib/dbApi";
import type { GcResponseData } from "@/lib/dbApi/type";
import Table, { accountColumns } from "@/components/table";
import style from "./index.module.css";

function Accounts({ list }: { list: GcResponseData[] }) {
  const dataSource: {
    name: string;
    address: string;
    type: string;
  }[] = [];

  list.forEach((v) => {
    if (Array.isArray(v.contracts)) {
      v.contracts.map(({ address, type }) => {
        dataSource.push({
          name: v.name,
          address,
          type,
        });
      });
    }
  });

  return (
    <div className={style.card}>
      <div className={style.title}>ACCOUNTS</div>
      <Table columns={accountColumns} dataSource={dataSource}></Table>
    </div>
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
      <Accounts list={searchData}></Accounts>
      {searchData.length === 0 && <Empty></Empty>}
    </div>
  );
}

export default SearchPage;
