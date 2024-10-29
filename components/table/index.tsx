import type { ReactNode } from "react";

import addressColumns from "./schema/address";
import blockColumns from "./schema/blocks";
import blockColumns_home from "./schema/home_block";
import txColumns_home from "./schema/home_tx";
import blockDetailColumns from "./schema/blockDetail";
import txsColumns from "./schema/txs";
import accountColumns from "./schema/account";

import style from "./index.module.css";

export {
  addressColumns,
  blockColumns,
  blockColumns_home,
  txColumns_home,
  txsColumns,
  blockDetailColumns,
  accountColumns,
};

export interface Columns<T> {
  title: string;
  dataIndex: keyof T;
  render?: (record: T, index: number) => ReactNode;
}

interface Props<T> {
  loading?: boolean;
  dataSource: T[] | null;
  columns: Columns<T>[];
}

function Loading() {
  return <div className={style.loading}>Loading...</div>;
}

function NoData() {
  return <div className={style.noData}>No Data</div>;
}

function Table<T>({ dataSource, columns, loading }: Props<T>) {
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
          {dataSource &&
            dataSource.map((dataItem, index) => (
              <tr key={index}>
                {columns.map((columnsItem, index) => {
                  if (typeof columnsItem.render === "function") {
                    return (
                      <td key={index}>
                        <div>{columnsItem.render(dataItem, index)}</div>
                      </td>
                    );
                  }
                  return (
                    <td key={index}>
                      <div>{dataItem[columnsItem.dataIndex] as ReactNode}</div>
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
      {loading && <Loading></Loading>}
      {dataSource && dataSource.length === 0 && <NoData></NoData>}
    </div>
  );
}

export default Table;
