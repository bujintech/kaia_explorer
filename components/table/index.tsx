import type { ReactNode } from "react";

import addressColumns from "./schema/address";
import blockColumns from "./schema/blocks";
import blockColumns_home from "./schema/home_block";
import blockDetailColumns from "./schema/blockDetail";
import txsColumns from "./schema/txs";

import style from "./index.module.css";

export { addressColumns, blockColumns, blockColumns_home, txsColumns, blockDetailColumns };

export interface Columns<T> {
  title: string;
  dataIndex: keyof T;
  render?: (record: T, index: number) => ReactNode;
}

interface Props<T> {
  dataSource: T[];
  columns: Columns<T>[];
}

function Table<T>({ dataSource, columns }: Props<T>) {
  return (
    <div className={style.table}>
      <table>
        <thead>
          <tr>
            {columns.map((columnsItem, index) => {
              return <th key={index}>{columnsItem.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((dataItem, index) => (
            <tr key={index}>
              {columns.map((columnsItem, index) => {
                let renderNode = dataItem[columnsItem.dataIndex] as ReactNode;
                if (typeof columnsItem.render === "function") {
                  renderNode = columnsItem.render(dataItem, index);
                }

                return <td key={index}>{renderNode}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
