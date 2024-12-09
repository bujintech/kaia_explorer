"use client"
import { useState } from "react";
import Table, { Columns } from "../table";
import style from "./index.module.css";
import { Address, Age, Block, Hash, Method } from "@/components/map";
import { hexToDecimal } from "@/lib/utils";
import { RenderMethod } from "./types";

export interface TabProps<T extends Record<string, unknown> = Record<string, unknown>> {
  title: string;
  key: string;
  columns: TabbedTableColumn<T>[];
  data?: T[];
}

export interface TabbedTableColumn<T> extends Omit<Columns<T>, "render"> {
  renderMethod: RenderMethod;
}

interface TableTabProps {
  tabs: TabProps[];
};

function TabbedTable({ tabs }: TableTabProps) {
  const [currentTab, setCurrentTab] = useState<TabProps>(tabs[0]);

  console.log(`Tabs: ${JSON.stringify(tabs, null, 2)}`);

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
        dataSource={currentTab?.data ?? []}
        columns={currentTab?.columns.map(column => {
          return {
            ...column,
            render: (_record: Record<string, unknown>, _index: number, value: unknown) => {
              switch (column.renderMethod) {
                case RenderMethod.Address:
                  return <Address address={String(value)}></Address>
                case RenderMethod.Age:
                  return <Age timestamp={String(value)}></Age>
                case RenderMethod.Block:
                  return <Block blockNumber={String(value)}></Block>
                case RenderMethod.Decimal:
                  return <span>{hexToDecimal(String(value))}</span>
                case RenderMethod.Hash:
                  return <Hash hash={String(value)}></Hash>
                case RenderMethod.Method:
                  return <Method input={String(value)}></Method>
                case RenderMethod.Span:
                  return <span>{String(value)}</span>
              }
              return <span>{String(value)}</span>
            }
          }
        }) ?? []}
      ></Table>
    </>
  )
}

export default TabbedTable;
