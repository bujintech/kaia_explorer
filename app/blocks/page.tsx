"use client";

import UpIcon from "@/components/upIcon";
import axios from "axios";
import Table, { blockColumns } from "@/components/table";
import useTable from "@/hooks/useTable";
import style from "./index.module.css";

function Blocks() {
  const { dataSource, loading } = useTable({
    apiFunction: () =>
      axios.post(`/api/block/list`, {
        data: {},
      }),
  });

  return (
    <div className={style.blocksPage}>
      <div className={style.title}>Blocks</div>
      <div className={style.tableContainer}>
        <Table loading={loading} columns={blockColumns} dataSource={dataSource}></Table>
      </div>
      <UpIcon></UpIcon>
    </div>
  );
}

export default Blocks;
