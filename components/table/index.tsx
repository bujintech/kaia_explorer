import type { ReactNode } from "react";

import addressColumns from "./schema/address";
import accountColumns from "./schema/account";

import txsColumns from "./schema/txs";
import txColumns_home from "./schema/txs_home";
import txColumns_home_mobile from "./schema/txs_home_mobile";

import blockColumns from "./schema/blocks";
import blockDetailColumns from "./schema/blockDetail";
import blockColumns_home from "./schema/blocks_home";
import blockColumns_home_mobile from "./schema/blocks_home_mobile";

import style from "./index.module.css";

export {
  addressColumns,
  blockColumns,
  blockColumns_home,
  txColumns_home,
  txsColumns,
  blockDetailColumns,
  accountColumns,
  blockColumns_home_mobile,
  txColumns_home_mobile,
};

export interface Columns<T> {
  title: React.ReactNode;
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
