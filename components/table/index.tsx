import { ReactNode } from "react";
import style from "./index.module.css";

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
