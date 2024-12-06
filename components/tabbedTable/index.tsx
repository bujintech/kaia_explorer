"use client"
import { useEffect, useState } from "react";
import Table, { Columns, TableProps } from "../table";
import style from "./index.module.css";
import { Address, Age, Block, Hash, Method, TxType } from "@/components/map";
import { hexToDecimal } from "@/lib/utils";

export interface TabProps<T> {
  title: string;
  key: string;
  columns: Columns<T>[];
  data?: T[];
}

interface TableTabProps<T> {
  tabs: TabProps<T>[];
};

function TabbedTable<T>({ tabs }: TableTabProps<T>) {
  const [currentTab, setCurrentTab] = useState<TabProps<T>>(tabs[0]);

  return (
    <>
      <div className={`${style.rootBox}`}>
        {
          tabs.map((tab) => {
            return <div
              key={tab.key}
              className={`${style.selector} ${currentTab?.key === tab.key ? style.selected : ""}`}
              onClick={() => setCurrentTab(tab)}
            >
              <span style={{ display: 'flex', margin: '10px 4px' }}>
                {tab.title}
              </span>
            </div>
          })
        }
      </div>
      <Table
        // @ts-ignore
        dataSource={currentTab?.data ?? []}
        // @ts-ignore
        columns={currentTab?.columns.map(column => ({
          ...column,
          render: (record, index, value) => {
            const key = column.dataIndex.toString().toLowerCase();
            if (key.includes("hash")) {
              return <Hash hash={value}></Hash>
            } else if (key.includes("address") || key.includes("contract") || key === "from" || key === "to") {
              const address = value as string;
              return <Address address={address}></Address>
            } else if (key.includes("block")) {
              if (JSON.stringify(value)?.startsWith("0x")) {
                return <Block blockNumber={hexToDecimal(value)}></Block>
              } else {
                return <span>{value}</span>
              }
            } else if (key === "method" && value?.toString().startsWith("0x")) {
              return <Method input={value}></Method>
            }
            return <span>{value}</span>
          }
        })) ?? []}
      ></Table>
    </>
  )
}

export default TabbedTable;
