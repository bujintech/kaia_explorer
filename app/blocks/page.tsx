"use client";

import Search from "@/components/search";
import axios from "axios";
import Table, { blockColumns } from "@/components/table";
import useTable from "@/hooks/useTable";
import style from "./index.module.css";

function Blocks() {
  const { dataSource } = useTable({
    apiFunction: () =>
      axios.post(`/api/block/list`, {
        data: {
          startWith: 166887916,
        },
      }),
  });

  return (
    <div className={style.blocksPage}>
      <div className={style.search}>
        <Search></Search>
      </div>

      <h1>Blocks</h1>
      <div className={style.tableContainer}>
        <Table columns={blockColumns} dataSource={dataSource}></Table>
      </div>
    </div>
  );
}

export default Blocks;
